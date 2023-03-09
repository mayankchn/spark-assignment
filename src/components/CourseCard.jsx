import CourseHeader from "./CourseHeader"
import CourseBody from "./CourseBody"
import CourseFooter from "./CourseFooter"

const CourseCard = ({ course }) => {

    let light = ""
    let dark = ""
    if (course.category_name === "Communication") {
        light = "bg-communication-light"
        dark = "bg-communication-dark"
    }
    if (course.category_name === "Visual Arts") {
        light = "bg-visual-arts-light"
        dark = "bg-visual-arts-dark"
    }
    if (course.category_name === "Music") {
        light = "bg-music-light"
        dark = "bg-music-dark"
    }

    return (
        <div className="max-w-xs mx-auto flex flex-col gap-1 bg-main rounded shadow-md">
            <CourseHeader course={course} light={light} dark={dark} />
            <CourseBody course={course} light={light} dark={dark} />
            <CourseFooter course={course} light={light} dark={dark} />
        </div>
    )
}
export default CourseCard