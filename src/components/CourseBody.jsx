const CourseBody = ({course,light,dark}) => {
    return (
        <div className="max-w-xs text-sm text-font-primary-light flex flex-col gap-2 px-3">
            <p>{course.pitch}</p>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-base text-font-primary-dark">Students will achieve:</h2>
                <ul className="flex flex-col gap-1 list-disc px-5">
                    {course.curriculum_outcomes.map((outcome,i)=>{
                        return (
                            <li key={i}>
                                {outcome}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <a href="#" className="underline text-font-primary-dark">View Detailed lesson plan</a>
            <hr className="mt-2" />
        </div>
    )
}
export default CourseBody;