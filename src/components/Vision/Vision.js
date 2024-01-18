import Image from "next/image";

const Vision = () => {
    return (
        <div className="overflow-hidden">
             <header style={{ backgroundImage: "url('https://i.ibb.co/cTbbHH2/textbooks-lying-near-bookcase.jpg')" }}
        className="flex flex-col items-center justify-center min-h-screen   mb-12 bg-fixed bg-center bg-cover"
      >
        <h2 className="text-4xl text-white font-bold mb-2 mt-4 lg:mt-0">Our Vision</h2>
        <p className="text-sm text-white text-center mb-3 p-2 md:p-0 ">Our goal is to create an efficient and user-friendly Library Management System that empowers <br/> librarians with advanced tools for cataloging, organizing, and tracking library resources. </p>
        
           <div className="grid grid-cols-1 gap-3 ml-8 md:ml-6  md:grid-cols-3 lg:grid-cols-4 lg:ml-6 my-6 items-center ">
            <div className=" card justify-center items-center card-body w-56 h-52 bg-white p-5">
            <Image className=" w-16"
                       src=" https://i.ibb.co/S0rpCnw/global-975645.png"
                       width={800}
                       height={500}
                       alt="top news"
                   />
           <h6 className="font-medium text-center text-slate-700">Build world-class technology solutions</h6>
            </div>
            <div className="card justify-center items-center card-body w-56 h-52 bg-white p-5">
            <Image className=" w-16"
                       src=" https://i.ibb.co/tzy1sFs/puzzle-5827084.png"
                       width={800}
                       height={500}
                       alt="top news"
                   />
           <h6 className="font-medium text-center text-slate-700">Personalized, stress-free and effective learning options</h6>
            </div>
            <div className="card justify-center items-center card-body w-56 h-52 bg-white p-5">
            <Image className=" w-16"
                       src=" https://i.ibb.co/1mM4vVB/happy-5066806.png"
                       width={800}
                       height={500}
                       alt="top news"
                   />
           <h6 className="font-medium text-center text-slate-700">Partner with schools to make technology-fuelled education </h6>
            </div>
            <div className="card justify-center items-center card-body w-56 h-52 bg-white p-5">
            <Image className=" w-16"
                       src="https://i.ibb.co/YLSb3P5/videoconference-3214781.png"
                       width={800}
                       height={500}
                       alt="top news"
                   />
           <h6 className="font-medium text-center text-slate-700">Equitable access to high-quality education anywhere</h6>
            </div>
            
        </div>
    </header>
        </div>
    );
};

export default Vision;