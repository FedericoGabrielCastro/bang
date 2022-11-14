import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SessionPage, LobbyPage } from "@pages";
import {
    LoginForm,
    RegisterForm,
    LobbyOptions
} from "@components";

export const ProviderRutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hola</h1>} />
                <Route path="/session" element={<SessionPage />}>
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route
                        path="/session/*"
                        element={<Navigate to="/session/login" replace />}
                    />
                    <Route
                        path="/session"
                        element={<Navigate to="/session/login" replace />}
                    />
                </Route>
                <Route path="/lobby" element={<LobbyPage />}>
                    <Route path="options" element={<LobbyOptions />} />
                    <Route
                        path="/lobby/*"
                        element={<Navigate to="/lobby/options" replace />}
                    />
                    <Route
                        path="/lobby"
                        element={<Navigate to="/lobby/options" replace />}
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
