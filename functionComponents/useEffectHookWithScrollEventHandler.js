import React, { userEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
        useEffect( () => {
            console.log("Component Mounted");

            const scrollHandler = () => {
                console.log("Page scrolled")
            }
    
            window.addEventListener("scroll", scrollHandler);
    
            return() => {
                window.removeEventListener("scroll", scrollHandler);
                console.log("component unmounted")
            }
        }, [])

        const unmount = () => {
            React.render(<p>Hello</p>, document.getElementById('root'));
        }

        return(
            <>
                <div>
                    {" "}
                    <p>Open console and scroll this page</p>
                    <button onClick={unmount}>Unmount Component</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum
                    </p>
                </div>
            </>
        )
        
}

ReactDOM.render(<App />, document.getElementById('root'));