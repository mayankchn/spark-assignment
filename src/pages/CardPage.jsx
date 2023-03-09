import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { data } from "../dummy";


const CardPage = () => {
    const length = Object.keys(data).length
    const random = Math.floor(Math.random() * length)
    const [courses, setCourses] = useState(data[random])
    const [filtCourses, setFiltCourses] = useState(courses)
    const [isJuniorSelected, setIsJuniorSelected] = useState(false)
    const [isSeniorSelected, setIsSeniorSelected] = useState(false)

    let categoryArr = courses.map((c) => {
        return c.category_name
    })
    let category = categoryArr[0]

    const handleJunior = () => {
        setIsJuniorSelected(true)
        setIsSeniorSelected(false)
        const newCourses = courses.filter((course) => {
            return course.min_age >= 5 && course.max_age <= 10
        })
        setFiltCourses(newCourses)
    }

    const hanldeSenior = () => {
        setIsSeniorSelected(true)
        setIsJuniorSelected(false)
        const newCourses = courses.filter((course) => {
            return course.min_age > 10
        })
        setFiltCourses(newCourses)
    }

    let defaultBtnBg = ""
    if (category === "Communication") {
        defaultBtnBg = "#EDFCFF"
    }
    if (category === "Visual Arts") {
        defaultBtnBg = "#DCCCFF"
    }
    if (category === "Music") {
        defaultBtnBg = "#FFEDC8"
    }

    let juniorBtnBg = defaultBtnBg
    let juniorText = ""
    let seniorBtnBg = defaultBtnBg
    let seniorText = ""

    if (isJuniorSelected) {
        if (category === "Communication") {
            juniorBtnBg = "#3EBEFF"
            juniorText = "text-white"
            seniorBtnBg = "#EDFCFF"
        } else if (category === "Visual Arts") {
            juniorBtnBg = "#905CFF"
            juniorText = "text-white"
            seniorBtnBg = "#DCCCFF"
        } else {
            juniorBtnBg = "#F9B215"
            juniorText = "text-white"
            seniorBtnBg = "#FFEDC8"
        }
    }
    if (isSeniorSelected) {
        if (category === "Communication") {
            seniorBtnBg = "#3EBEFF"
            seniorText = "text-white"
            juniorBtnBg = "#EDFCFF"

        } else if (category === "Visual Arts") {
            seniorBtnBg = "#905CFF"
            seniorText = "text-white"
            juniorBtnBg = "#DCCCFF"
        } else {
            seniorBtnBg = "#F9B215"
            seniorText = "text-white"
            juniorBtnBg = "#FFEDC8"
        }
    }

    return (
        <div className="max-ws max-w-screen-2xl mx-auto my-10">
            {category === "Music" ?
                <div className="max-w-xs mx-auto px-10 flex items-center justify-center">
                    <div className="relative rounded-lg cursor-pointer">
                        <svg width="147" height="100" viewBox="0 0 147 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="147" height="100" rx="8" fill="#F9B215" />
                        </svg>
                        <span className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-2xl font-medium text-white">(6-15)</span>
                        <div className="absolute inline-block -translate-x-1/2 left-1/2">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" fill="#F9B215" />
                            </svg>
                        </div>
                    </div>
                </div> :
                <div className="flex justify-center gap-5 max-w-xs mx-auto px-10 sm:max-w-md sm:justify-evenly">
                    <div className="relative rounded-lg cursor-pointer">
                        <svg width="147" height="100" viewBox="0 0 147 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleJunior}>
                            <rect width="147" height="100" rx="8" fill={juniorBtnBg} />
                        </svg>
                        <span className={"absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-2xl font-medium " + juniorText}>(6-10)</span>
                        {isJuniorSelected && <div className="absolute inline-block -translate-x-1/2 left-1/2">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" fill={juniorBtnBg} />
                            </svg>
                        </div>}
                    </div>
                    <div className="relative rounded-lg cursor-pointer">
                        <svg width="147" height="100" viewBox="0 0 147 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hanldeSenior}>
                            <rect width="147" height="100" rx="8" fill={seniorBtnBg} />
                        </svg>
                        <span className={"absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-2xl font-medium " + seniorText}>(11-15)</span>
                        {isSeniorSelected && <div className="absolute inline-block -translate-x-1/2 left-1/2">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717964 0L13.9282 0L7 12Z" fill={seniorBtnBg} />
                            </svg>
                        </div>}
                    </div>
                </div>
            }
            <div className="max-w-main mx-auto flex flex-wrap gap-11 mt-14">
                {
                    filtCourses && filtCourses.map((course, i) => {
                        return <CourseCard key={i} course={course} />
                    })
                }
            </div>
        </div>
    )
}
export default CardPage;