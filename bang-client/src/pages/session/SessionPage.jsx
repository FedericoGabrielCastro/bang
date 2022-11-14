import { Outlet } from "react-router-dom";

export const SessionPage = () => {
    return (
        <section className="sessionPage">
            <div className="sessionPage__card">
                <h1 className="sessionPage__card__title"> bang! </h1>
                <Outlet />
            </div>
        </section>
    );
};
