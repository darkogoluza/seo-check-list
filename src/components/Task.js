import {useEffect, useRef, useState} from "react";

const Task = ({title, body}) => {
    const [isDone, setIsDone] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const task = useRef()

    useEffect(() => {
        const handleMouseMove = (event) => {
            const rect = task.current.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;

            task.current.style.setProperty("--mouse-x", `${x}px`)
            task.current.style.setProperty("--mouse-y", `${y}px`)
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div
            ref={task}
            onClick={() => setIsDone(!isDone)}
            className={"task relative bg-slate-500 w-full px-2 py-4 bg-slate-900 border border-2 border-slate-100 border-opacity-20 text-blue-100 rounded-2xl cursor-pointer " + (isDone ? "bg-opacity-30 " : "bg-opacity-90")}>
            <h1 className={"text-sm " +( isDone ? "line-through" : "")}>{title}</h1>

            {body && (
                <button className="text-slate-400 hover:text-slate-300 ml-auto block " onClick={(e) => {
                    e.stopPropagation();
                    setShowInfo(!showInfo)
                }}>
                    {showInfo ? "show less" : "show more"}
                </button>
            )}


            {showInfo && (
                <div className="pt-4">
                    {body}
                </div>
            )}


        </div>
    )
}

export default Task;