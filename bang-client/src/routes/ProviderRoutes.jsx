import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SessionPage, LobbyPage, GamePage } from "@pages";
import { LoginForm, RegisterForm, LobbyOptions, Rooms } from "@components";

export const ProviderRutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>No deberias ver esto</h1>} />
                {/* ********************************************************** Session */}
                <Route path="/session" element={<SessionPage />}>
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route
                        path="/session"
                        element={<Navigate to="/session/login" replace />}
                    />
                </Route>
                {/* ********************************************************** Lobby */}
                <Route path="/lobby" element={<LobbyPage />}>
                    <Route path="options" element={<LobbyOptions />} />
                    <Route path="rooms" element={<Rooms />} />
                    <Route
                        path="/lobby"
                        element={<Navigate to="/lobby/options" replace />}
                    />
                </Route>
                {/* ********************************************************** Game */}
                <Route path="/game" element={<GamePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
