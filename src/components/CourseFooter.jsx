const CourseFooter = ({ course, light, dark }) => {
    return (
        <div className="max-w-xs flex flex-col gap-1 py-2">
            <div className="flex justify-between items-center px-3">
                <span className="text-2xl font-bold flex items-center">
                    <img src="/rupee.png" className="" />
                    {course.discounted_price}
                </span>
                <span className="font-bold text-lg flex items-center">
                    <img src="/rupee.png" className="w-6 h-6" />
                    {Math.floor(course.discounted_price/course.num_classes)}
                    <span className="text-font-primary-light font-normal ml-1">per class</span>
                </span>
            </div>
            <span className="line-through text-lg text-font-primary-light px-3">{course.original_price}</span>
            <span className="text-xs font-medium text-center text-orange px-3">We'll schedule the slots as per your convenience</span>
            <div className={"flex gap-2 justify-between py-2 px-3 text-sm " + light}>
                <div className="flex items-center gap-1">
                    <img src="/i1.png" alt="" className="" />
                    <p>8 Activities</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src="/i2.png" alt="" className="" />
                    <p>{course.games_count} Games</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src="/i3.png" alt="" className="" />
                    <p>{course.certificate_count} Certificate</p>
                </div>
            </div>
            <button className="text text-white font-medium bg-star self-center px-5 py-2 rounded-full text-base">Buy Course</button>
        </div>
    )
}
export default CourseFooter;