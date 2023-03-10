import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store/config';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import Router from 'Router';
import socket from 'services/socket';

function App() {
    useEffect(() => {
        // 앱에 접속되면 socket 에 접속됨
        socket.on('connect', () => {
            // 로컬에 AT 가 있을경우 === 로그인한 상태기에,
            if (localStorage.getItem('accessToken') !== null) {
                // 서버에서 해당 userId 로 방을하나 판다.
                socket.emit('login', localStorage.getItem('userId'));
            }
            // 이 로직은 새로고침되어도 로그인상태라면 방이 계속 유지가 되는 장점이있다.(이방법만 가능할듯)
        });

        socket.on('disconnect', () => {
            socket.close();
        });
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Router />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
