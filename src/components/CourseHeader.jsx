const CourseHeader = ({course,light,dark}) => {
    let myFill = ""
    let title = ""
    
    if(dark==="bg-communication-dark"){
        myFill = "#3EBEFF"
        title ="text-communication-dark"
    }
    if(dark==="bg-visual-arts-dark"){
        myFill = "#905CFF"
        title="text-visual-arts-dark"
    }
    if(dark==="bg-music-dark"){
        myFill = "#F9B215"
        title="text-music-dark"
    }

    return (
        <div className={"max-w-xs h-36 relative "+light}>
            <svg className="absolute top-5 left-0"
             width="180" height="30" viewBox="0 0 180 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30C0.447718 30 0 29.5523 0 29L0 1C0 0.447714 0.447715 -1.90735e-06 1 -1.90735e-06L176.734 -1.90735e-06C177.72 -1.90735e-06 178.111 1.27638 177.294 1.82855L157.478 15.2198C156.867 15.6325 156.898 16.5414 157.534 16.9124L176.8 28.1359C177.682 28.6499 177.318 30 176.297 30L1 30Z" fill={myFill} />
            </svg>

            <svg className="absolute right-0 top-0"
            width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 70C60.8075 70 51.705 68.1894 43.2122 64.6716C34.7194 61.1537 27.0026 55.9976 20.5025 49.4975C14.0024 42.9974 8.84626 35.2806 5.32843 26.7878C1.8106 18.295 -4.01818e-07 9.19253 0 -3.0598e-06L70 0V70Z" fill={myFill} />
            </svg>

            <p className="font-lato text-sm absolute top-6 left-4 text-white font-bold inline-block">{course.num_classes} lessons</p>
            <p className="inline-block text-base font-black absolute right-2 top-1">{Math.floor(((course.original_price-course.discounted_price)/course.original_price)*100)}%<br />off</p>
            <p className={"absolute text-bg-2 -transalte-y-1/2 top-1/2 inline-block left-4 font-bold text-xl "+title}>{course.display_name}</p>
            <div className="flex absolute bottom-4 left-4 items-center">
                <img src="/star-y.png" alt="" className="w-4 h-4" /><img src="/star-y.png" alt="" className="w-4 h-4" /><img src="/star-y.png" alt="" className="w-4 h-4" /><img src="/star-y.png" alt="" className="w-4 h-4" /><img src="/star-w.png" alt="" className="w-4 h-4" />
            </div>
            <p className="inline-block absolute bottom-4 left-1/3 text-sm">({(course.rating.slice(6))} reviews)</p>
        </div>
    )
}
export default CourseHeader;