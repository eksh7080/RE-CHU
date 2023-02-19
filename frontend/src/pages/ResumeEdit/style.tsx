import styled from '@emotion/styled';

export const Background = styled.section`
    background-color: #f9fafb;
`;

export const ResumeContainer = styled.section`
    display: flex;
    justify-content: center;

    .rotate {
        transform: rotate(45deg);
        transition: transform 0.4s;
    }

    .block {
        display: block;
    }

    .visible {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    .none {
        display: none;
    }
`;

export const ResumeFrame = styled.section`
    max-width: 128rem;
    background-color: #fff;
    border: 1px solid #d7e2eb;
    margin: 6% auto 0;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin: 2.05rem;
    height: 100%;

    @media all and (max-width: 1280px) {
        display: unset;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.6rem;
    align-items: center;
    gap: 1rem;

    & input {
        font-size: 4.8rem;
    }

    & span {
        & :hover {
            cursor: pointer;
        }

        & button[type='button'] {
            border: 0;
            outline: 0;
            background-color: #e2e2e2;
            padding: 0.8rem;
            border-radius: 0.8rem;
            font-size: 2.24rem;
        }
    }
`;

export const UserInfo = styled.div`
    padding: 3.2rem;

    & .userFlex {
        display: flex;
        gap: 6.4em;
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        padding: 3.2rem;

        & ul {
            & li {
                line-height: 1.4;
                text-indent: 10px;

                & small,
                input {
                    font-size: 1.6rem;
                }
            }

            & li:first-of-type {
                text-indent: 0;
                line-height: 3;
                font-size: unset;
                & input {
                    font-size: 4.2em;
                    font-weight: 900;
                }
            }

            & li:last-of-type {
                margin-top: 0.8rem;
                & textarea {
                    width: 100%;
                    border: 1px solid #b0e0e6;
                    border-radius: 10px;
                    padding-top: 0.8rem;
                    height: 60px;
                    text-indent: 10px;
                    background-color: #fff;
                }
            }
        }

        & div {
            & article {
                width: 160px;
                height: 160px;
                overflow: hidden;
                border-radius: 50%;
                border: 1px solid transparent;

                & img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

export const InputForm = styled.div`
    padding: 3.2rem;
    width: calc(100vw - 16rem);

    & .inputFlex {
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        padding: 3.2rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        box-sizing: border-box;

        & section:first-of-type {
            & label {
                font-size: 1.92rem;
                font-weight: 600;
            }

            & .positionDiv {
                margin-top: 0.8rem;
                border: 1px solid #d7e2eb;
                min-height: 1.6rem;
                border-radius: 0.4rem;
                padding: 1.6rem;

                & select {
                    width: 100%;
                    height: inherit;
                    font-size: 1.92rem;
                    font-weight: 600;

                    & option {
                    }
                }
            }
        }

        & section:nth-of-type(2),
        section:last-of-type {
            & form {
                margin-top: 2.56rem;
                & .formWrap {
                    & ul {
                        line-height: 3.2rem;
                        padding-bottom: 3.2rem;
                        & li {
                            display: flex;

                            & label {
                                font-size: 1.76rem;
                            }

                            & input {
                                padding: 1.6rem;
                                border: 1px solid #b0e0e6;
                                width: 100%;
                            }

                            & dl {
                                width: 50%;

                                & select {
                                    border: 1px solid #b0e0e6;
                                    height: inherit;
                                    font-size: 1.28rem;
                                    border-radius: 0.4rem;
                                    box-sizing: border-box;
                                    padding-left: 1.44rem;
                                    padding-right: 1.6rem;
                                    width: 100%;
                                }

                                & dt {
                                    font-size: 1.76rem;
                                    font-weight: 400;

                                    & label {
                                        font-size: 1.76rem;
                                    }

                                    & small {
                                        padding-left: 1.92rem;
                                        font-size: 1.44rem;
                                    }

                                    & .switch {
                                        position: relative;
                                        display: inline-block;
                                        width: 60px;
                                        height: 24px;
                                        font-size: unset;
                                        vertical-align: middle;

                                        & input[type='checkbox'] {
                                            opacity: 0;
                                            width: 0;
                                            height: 0;

                                            &:checked + .slider {
                                                background-color: #2196f3;
                                            }

                                            &:checked + .slider::before {
                                                transform: translateX(34px);
                                                background-color: #fff;
                                            }
                                        }

                                        & .slider {
                                            position: absolute;
                                            cursor: pointer;
                                            background-color: #b2c0cc;
                                            border-radius: 25px;
                                            top: 0;
                                            right: 0;
                                            bottom: 0;
                                            left: 0;
                                            transition: background-color 0.4s ease;

                                            &::before {
                                                position: absolute;
                                                content: '';
                                                height: 18px;
                                                width: 18px;
                                                left: 4px;
                                                bottom: 4px;
                                                background-color: white;
                                                border-radius: 50%;
                                                transition: transform 0.4s ease;
                                            }
                                        }
                                    }
                                }

                                & dd {
                                    height: 4.8rem;

                                    .ant-picker {
                                        & input {
                                            border: 0;
                                        }
                                        border: 1px solid #b0e0e6;
                                        height: inherit;
                                        font-size: 1.28rem;
                                        border-radius: 0.4rem;
                                        box-sizing: border-box;
                                        width: 90%;
                                        padding-left: 1.44rem;
                                    }

                                    & input {
                                        border: 1px solid #b0e0e6;
                                        height: inherit;
                                        font-size: 1.28rem;
                                        border-radius: 0.4rem;
                                        box-sizing: border-box;
                                        width: 90%;
                                        padding-left: 1.44rem;
                                    }
                                }
                            }

                            & .noneDevelop {
                                display: flex;
                                align-items: center;
                                gap: 1.6rem;

                                & dt {
                                    padding-left: 1.6rem;
                                    width: 26px;
                                    height: 26px;
                                    & input[type='checkbox'] {
                                        width: 26px;
                                        height: 26px;
                                        padding: 0;
                                        margin: 0;
                                    }
                                }

                                & dd {
                                    padding-left: 1.6rem;
                                    border-left: 1px solid #b0e0e6;
                                    height: unset;
                                    min-width: 8.32rem;
                                    & label {
                                        font-size: 1.76rem;
                                    }
                                }
                            }
                        }
                    }

                    & ul:nth-of-type(2) {
                        & li:last-of-type {
                            position: relative;
                            flex-wrap: wrap;

                            & .stackList {
                                margin: 0.4rem;
                                padding: 0.4rem;
                                background-color: #00bfff;
                                border-radius: 0.5rem;
                                color: white;
                                font-size: 1.2rem;
                                font-weight: 600;

                                & button[type='button'] {
                                    background: transparent;
                                    border: 0;
                                    vertical-align: middle;
                                    color: #fff;

                                    & svg {
                                        &:hover {
                                            color: #000;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }

                            & article {
                                position: absolute;
                                width: calc(100% - 2px);
                                height: 200px;
                                background-color: white;
                                border: 1px solid #b0e0e6;
                                top: 110%;
                                z-index: 99;
                                overflow-y: scroll;

                                & dl {
                                    width: 100%;

                                    &:hover {
                                        background-color: rgb(240, 241, 243);
                                        cursor: pointer;
                                    }

                                    & dt {
                                        font-size: 1.4rem;
                                        padding: 0.4rem 1.4rem;
                                    }
                                }
                            }
                        }
                    }

                    & ul:last-of-type {
                        padding-bottom: 0;

                        & label {
                            font-size: 1.76rem;
                        }

                        & textarea {
                            border: 1px solid #b0e0e6;
                            background-color: #fff;
                            resize: vertical;
                            width: 100%;
                            padding-left: 2.56rem;
                            border-radius: 10px;
                            padding-top: 1.28rem;
                            height: 60px;
                        }
                    }
                }

                & .formBtn {
                    padding-top: 1.6rem;
                    display: flex;
                    justify-content: center;
                    gap: 0.32rem;

                    & button[type='button'] {
                        background-color: rgba(192, 192, 192, 0.5);
                        border-color: transparent;
                        padding: 0.4rem 1.3rem;
                        font-size: 1.3rem;
                        line-height: 2rem;
                        font-weight: 400;
                        box-sizing: border-box;
                        border-radius: 0.4rem;

                        &:hover {
                            opacity: 0.8;
                            cursor: pointer;
                        }
                    }

                    & button[type='submit'] {
                        background-color: #00bfff;
                        border-color: transparent;
                        padding: 0.4rem 1.3rem;
                        font-size: 1.3rem;
                        line-height: 2rem;
                        font-weight: 400;
                        box-sizing: border-box;
                        border-radius: 0.4rem;

                        &:hover {
                            opacity: 0.8;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
`;

export const FormTitle = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 1.6rem;
    border: 1px solid #d7e2eb;
    border-radius: 0.4rem;
    align-items: center;
    padding: 1.6rem;

    & label {
        font-size: 1.9rem;
        font-weight: 600;
    }

    & span {
        width: 32px;
        height: 32px;
        cursor: pointer;
        & svg {
            font-size: 2.9rem;
        }
    }
`;

export const ExistForm = styled.section`
    margin-top: 0.8rem;
    border-bottom: 1px solid #d7e2eb;
    padding: 1.6rem;
    font-size: 1.4rem;

    & h1 {
        font-size: 1.9rem;
        font-weight: 600;
    }

    & .updateBefore {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .customBtn {
            display: flex;

            & li {
                & button[type='button'] {
                    border: 0;
                    background-color: transparent;
                    padding: 0.4rem 1.3rem;
                    font-size: 1.3rem;
                    line-height: 2rem;
                    font-weight: 400;
                    box-sizing: border-box;
                    border-radius: 0.4rem;
                }
            }

            & li:first-of-type {
                & button[type='button'] {
                    &:hover {
                        cursor: pointer;
                        color: blue;
                        font-weight: 900;
                    }
                }
            }

            & li:last-of-type {
                & button[type='button']:last-of-type {
                    &:hover {
                        cursor: pointer;
                        font-weight: 900;
                        color: red;
                    }
                }
            }
        }
    }

    & .updatingForm {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .customBtn {
            display: flex;

            & li {
                & button[type='submit'] {
                    border: 0;
                    background-color: transparent;
                    padding: 0.4rem 1.3rem;
                    font-size: 1.3rem;
                    line-height: 2rem;
                    font-weight: 400;
                    box-sizing: border-box;
                    border-radius: 0.4rem;

                    &:hover {
                        cursor: pointer;
                        font-weight: 900;
                    }
                }
            }

            & li:last-of-type {
                & button[type='submit'] {
                    &:hover {
                        color: blue;
                    }
                }
            }
        }
    }

    & .careerContent {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & ul {
            width: 50%;
        }

        & ul:first-of-type {
            & li {
                font-size: 1.6rem;
            }
        }

        & ul:last-of-type {
            line-height: 1.6;
            & li {
                & strong {
                    font-size: 2.2rem;
                }
            }

            & li:last-of-type {
                font-size: 1.6rem;
            }
        }

        & dl {
            & dt {
                line-height: 1.6;
            }

            border-left: 2px solid #d3d3d3;
            padding: 2rem;
        }
    }

    & .projectContent {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & ul {
            padding: 1rem 0;
            width: 100%;
            line-height: 1.6;

            & li:first-of-type {
                & strong {
                    font-size: 2.2rem;
                }

                & span {
                    font-size: 1.6rem;
                }
            }

            & li:last-of-type {
                & span {
                    padding-right: 1rem;
                }
            }
        }

        & dl {
            & dt {
                line-height: 1.6;
            }

            border-left: 2px solid #d3d3d3;
            padding: 2rem;
        }
    }
`;
