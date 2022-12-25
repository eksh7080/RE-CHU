import styled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Button, Input, Switch, Typography, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import API from 'utils/api';
import Layout from 'components/Layout';

const { Title } = Typography;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-self: center;
    padding: 25px 25px;
    margin: 20px auto;
    margin-right: auto;
    margin-left: auto;
    max-width: 1280px;
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.6rem;
`;

const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
`;

const WrapperTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

const ToggleDiv = styled.div`
    width: 120px;
    margin-left: 20px;
    height: 100%;
`;

const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
`;

const ResumeSelectUI = styled.div`
    width: 100%;
    height: 80px;
    background-color: yellowgreen;
`;

interface RouteState {
    state: IBoardInfo;
}

interface IBoardInfo {
    content: string;
    hashTags: string;
    title: string;
}

function PostCreate() {
    const navigate = useNavigate();

    // undefined: 게시물 생성, postId: 해당 게시물 수정
    const { postId } = useParams<{ postId: string }>();
    const { state } = useLocation() as RouteState;

    // 마크다운 에디터 객체
    const editorRef = useRef<Editor>(null);
    // 이력서 첨부 여부 상태
    const [isResume, setIsResume] = useState<boolean>(false);
    // 폼 입력 데이터
    const [form, setForm] = useState({
        title: '',
        hashTags: '',
    });
    const { title, hashTags } = form;

    // 폼 제출 시 에러 발생한 항목에 에러 메세지 출력을 위한 상태값
    const [error, setError] = useState({
        resume: false,
        title: false,
        content: false,
    });

    const onToggleButton = () => {
        setIsResume(prev => !prev);
        console.log('Resume :', isResume);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement: NotificationPlacement, message: string) => {
        api.info({
            message: message,
            placement,
        });
    };

    const handleSubmit = async () => {
        // 게시물 작성 폼 유효성 검사
        // 이력서 on 인데 이력서를 선택하지 않았을 경우
        if (isResume === true) {
            // 이력서 선택 여부 추가 필요
            setError({
                ...error,
                resume: true,
            });
            openNotification('bottomRight', '이력서를 선택해주세요.');
            return;
        }
        // 제목 입력 여부 판별
        if (form.title === '') {
            setError({
                ...error,
                title: true,
            });
            openNotification('bottomRight', '제목을 입력해주세요.');
            return;
        }
        // 게시물 내용 입력 여부 판별
        const content = editorRef.current?.getInstance().getMarkdown();
        if (content === '') {
            setError({
                ...error,
                content: true,
            });
            // 에디터 포커스
            editorRef.current?.getInstance().focus();
            openNotification('bottomRight', '게시물 내용을 입력해주세요.');
            return;
        }

        const resumeId = isResume ? 0 : 0;
        const data = {
            ...form,
            content,
            resumeId,
        };

        try {
            if (!postId) {
                const res = await API.post('/board', data);
                navigate(`/post/${String(res.data)}`);
            } else {
                await API.patch(`/board/${postId}`, '', data);
                navigate(`/post/${postId}`);
            }
        } catch (err) {
            console.log(err);
            openNotification('bottomRight', `오류가 발생했습니다: ${err}`);
        }
    };

    const updateEditorContent = (content: string) => {
        editorRef.current?.getInstance().setMarkdown(content);
    };

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            type HookCallback = (url: string, text?: string) => void;
            editorRef.current
                .getInstance()
                .addHook('addImageBlobHook', async (blob: File, callback: HookCallback) => {
                    // blob 자체가 file 임,
                    const formData = new FormData();
                    // 아래와 같이 저장하면 formData {image:blob} 형태가 됨
                    formData.append('image', blob);
                    // 서버에 이미지 저장 및 저장된 이미지 url 응답 받기
                    const url = await API.post('/file/url', formData);
                    // 에디터에 url과 파일 이름을 이용한 마크다운 이미지 문법 작성 콜백 함수
                    callback(process.env.REACT_APP_SERVER_URL + url.imageUrl, blob.name);
                    return false;
                });
        }

        // 게시물 수정일 경우 기존 내용 채우기
        if (postId) {
            updateOriginBoardData();
        }

        return () => {};
    }, []);

    const updateOriginBoardData = async () => {
        // 게시물 페이지 수정 버튼으로 접근한 경우
        if (state) {
            setForm({
                title: state.title,
                hashTags: state.hashTags,
            });
            updateEditorContent(state.content);
            return;
        }

        // url을 임의로 입력해서 접근한 경우
        const res = await API.get(
            `/board/${postId}`,
            `?lifeIsGood=${localStorage.getItem('userId')}`,
        );

        const data = res.boardInfo;

        const result = {
            title: data.title,
            content: data.content,
            hashTags: data.hashTags,
        };

        setForm({
            title: result?.title,
            hashTags: result.hashTags,
        });
        updateEditorContent(result.content);
    };

    return (
        <Layout>
            {contextHolder}
            <Wrapper>
                <WrapperHeader>
                    <WrapperTitle>이력서 첨부</WrapperTitle>
                    <ToggleDiv>
                        <Switch onClick={onToggleButton} />
                    </ToggleDiv>
                </WrapperHeader>

                {isResume && <ResumeSelectUI />}
            </Wrapper>

            <Wrapper>
                <Title level={4}>제목</Title>
                <Input
                    size="large"
                    placeholder="제목을 입력해주세요."
                    name="title"
                    value={title}
                    onChange={onChange}
                />
            </Wrapper>
            <Wrapper>
                <Title level={4}>내용</Title>
                <Editor
                    placeholder="이 입력폼은 마크다운 문법을 지원합니다."
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                    language="ko-KR"
                    plugins={[colorSyntax]}
                    ref={editorRef}
                />
            </Wrapper>
            <Wrapper>
                <Title level={4}>태그</Title>
                <Input size="large" name="hashTags" value={hashTags} onChange={onChange} />
            </Wrapper>
            <ButtonDiv>
                <Button type="default" size="large">
                    취소
                </Button>
                <Button type="primary" size="large" onClick={handleSubmit}>
                    {postId ? '수정' : '등록'}
                </Button>
            </ButtonDiv>
        </Layout>
    );
}

export default PostCreate;
