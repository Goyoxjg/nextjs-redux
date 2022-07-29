import {useSelector} from "react-redux";
import {useState} from "react";

const View = () => {
    const { todo, counter, users, profile } = useSelector((state) => state)

    const [active, setActive] = useState('user');

    const handlerToggle = (value) => {
        if (value === active) {
            setActive('')
        }
        else {
            setActive(value);
        }
    }

    return (
        <div className="container">
            <div className="mb-3 text-center">
                <h3>Redux Data</h3>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className={`accordion-button ${active !== 'users' ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={() => handlerToggle('users')}
                        >
                            Users
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${active === 'users' ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <code>
                                <pre>
                                    {JSON.stringify(users, null, 2)}
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className={`accordion-button ${active !== 'todo' ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo"
                            onClick={() => handlerToggle('todo')}
                        >
                            Todo
                        </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse ${active === 'todo' ? 'show' : ''}`} aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <code>
                                <pre>
                                    {JSON.stringify(todo, null, 2)}
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className={`accordion-button ${active !== 'counter' ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            onClick={() => handlerToggle('counter')}
                        >
                            Counter
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse ${active === 'counter' ? 'show' : ''}`} aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <code>
                                <pre>
                                    {JSON.stringify(counter, null, 2)}
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className={`accordion-button ${active !== 'profile' ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                            onClick={() => handlerToggle('profile')}
                        >
                            Profile
                        </button>
                    </h2>
                    <div id="collapseFour" className={`accordion-collapse collapse ${active === 'profile' ? 'show' : ''}`} aria-labelledby="headingFour"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <code>
                                <pre>
                                    {JSON.stringify(profile, null, 2)}
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;
