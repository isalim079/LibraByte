import { HiOutlineExternalLink } from "react-icons/hi";

const FeatureSection = () => {
    return (
        <div className="lg:m-[140px] md:m-[80px] m-8"> 

            {/* Title Code  */}

            <div className=" flex justify-between items-center pb-20">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold">Feature Category</h1>
                <button className="flex justify-between items-center gap-x-2 lg:text-xl md:text-lg text-lg">View All <HiOutlineExternalLink className="lg:text-[22px] text-lg" /></button>
            </div>

            {/* Grid Content - Row 1 */}

            <div className=" grid grid-cols-12 lg:gap-6 md:gap-4 gap-2 mb-6">


                <div className="col-span-3 bg-[#DBA084] lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5 ">
                    <div className="flex justify-center items-center px-2.5  md:p-2 md:pb-0.5 lg:pb-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#222628" />
                            <path d="M7.76825 35.4099C4.43342 35.4099 2.76601 35.4099 1.52589 34.3763C1.16653 34.0767 0.766338 33.6038 0.530426 33.1998C-0.283665 31.8057 -0.0385403 30.3454 0.451713 27.4248C0.87836 24.8831 1.49574 22.4038 2.29851 20.4657C3.98549 16.393 6.45814 12.6924 9.57527 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8831 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8056 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0767 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7343 33.707C29.3904 35.4099 26.0469 35.4099 19.3599 35.4099L7.76825 35.4099Z" fill="#222628" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl  lg:pt-5 md:pt-3 pt-0 text-center">Science Fiction</h1>
                </div>


                <div className="col-span-4 bg-[#333D2E] lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5">
                    <div className="flex justify-center items-center px-5  md:p-2 md:pb-0.5 lg:pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#FDFCF7" />
                            <path d="M7.76828 35.4099C4.43345 35.4099 2.76604 35.4099 1.52592 34.3763C1.16656 34.0767 0.766369 33.6038 0.530456 33.1998C-0.283635 31.8057 -0.0385098 30.3454 0.451743 27.4248C0.87839 24.8831 1.49577 22.4038 2.29854 20.4657C3.98552 16.393 6.45817 12.6924 9.5753 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8832 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8057 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0768 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7344 33.707C29.3905 35.4099 26.047 35.4099 19.3599 35.4099L7.76828 35.4099Z" fill="#FDFCF7" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl  lg:pt-5 md:pt-3 pt-0 text-center text-white">Historical Fiction</h1>
                </div>


                <div className="col-span-5 bg-[#EFEDE1] lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5">
                    <div className="flex justify-center items-center px-8  md:p-2 md:pb-0.5 lg:pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#333D2E" />
                            <path d="M7.76828 35.4099C4.43345 35.4099 2.76604 35.4099 1.52592 34.3763C1.16656 34.0767 0.766369 33.6038 0.530456 33.1998C-0.283635 31.8057 -0.0385098 30.3454 0.451743 27.4248C0.87839 24.8831 1.49577 22.4038 2.29854 20.4657C3.98552 16.393 6.45817 12.6924 9.5753 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8832 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8057 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0768 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7344 33.707C29.3905 35.4099 26.047 35.4099 19.3599 35.4099L7.76828 35.4099Z" fill="#333D2E" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl lg:pt-5 md:pt-3 pt-0 text-center">Classic Literature</h1>
                </div>
            </div>

            {/* Grid Content - Row 2 */}

            <div className=" grid grid-cols-12 lg:gap-6 md:gap-4 gap-2">
                <div className="col-span-5 bg-[#EFEDE1] lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5">
                    <div className="flex justify-center items-center px-8  md:p-2 md:pb-0.5 lg:pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#333D2E" />
                            <path d="M7.76828 35.4099C4.43345 35.4099 2.76604 35.4099 1.52592 34.3763C1.16656 34.0767 0.766369 33.6038 0.530456 33.1998C-0.283635 31.8057 -0.0385098 30.3454 0.451743 27.4248C0.87839 24.8831 1.49577 22.4038 2.29854 20.4657C3.98552 16.393 6.45817 12.6924 9.5753 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8832 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8057 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0768 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7344 33.707C29.3905 35.4099 26.047 35.4099 19.3599 35.4099L7.76828 35.4099Z" fill="#333D2E" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl lg:pt-5 md:pt-3 pt-0 text-center">Science Fiction</h1>
                </div>



                <div className="col-span-4 bg-[#DBA084]  lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5">
                    <div className="flex justify-center items-center px-5  md:p-2 md:pb-0.5 lg:pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#222628" />
                            <path d="M7.76825 35.4099C4.43342 35.4099 2.76601 35.4099 1.52589 34.3763C1.16653 34.0767 0.766338 33.6038 0.530426 33.1998C-0.283665 31.8057 -0.0385403 30.3454 0.451713 27.4248C0.87836 24.8831 1.49574 22.4038 2.29851 20.4657C3.98549 16.393 6.45814 12.6924 9.57527 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8831 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8056 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0767 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7343 33.707C29.3904 35.4099 26.0469 35.4099 19.3599 35.4099L7.76825 35.4099Z" fill="#222628" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl  lg:pt-5 md:pt-3 pt-0 text-center text-white">Science Fiction</h1>
                </div>


                <div className="col-span-3  bg-[#333D2E] lg:h-[280px] md:h-[210px] h-[140px]  rounded-3xl lg:p-10 md:p-6 p-0.5 ">
                    <div className="flex justify-center items-center px-2.5  md:p-2 md:pb-0.5 lg:pb-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                            <path d="M16.6849 46.5558C13.3298 46.5558 11.6523 46.5558 10.3964 47.6419C10.0425 47.9479 9.62762 48.4615 9.40281 48.8718C8.60493 50.3279 8.90545 51.7256 9.50646 54.5211C10.5062 59.1711 12.3776 63.6152 15.0465 67.6096C19.2106 73.8415 25.1291 78.6987 32.0536 81.567C38.9782 84.4352 46.5978 85.1857 53.9489 83.7235C61.2999 82.2612 68.0523 78.652 73.3521 73.3522C78.652 68.0524 82.2612 61.3 83.7234 53.9489C85.1856 46.5978 84.4352 38.9782 81.5669 32.0537C78.6987 25.1291 73.8415 19.2106 67.6095 15.0466C63.6152 12.3776 59.171 10.5062 54.521 9.50651C51.7256 8.90549 50.3279 8.60498 48.8717 9.40285C48.4615 9.62766 47.9479 10.0425 47.6419 10.3964C46.5557 11.6523 46.5557 13.3299 46.5558 16.685L46.5558 30.5058C46.5558 37.1928 46.5558 40.5363 44.8528 42.8802C44.3029 43.6372 43.6372 44.3029 42.8802 44.8529C40.5363 46.5558 37.1928 46.5558 30.5058 46.5558H16.6849Z" fill="#FDFCF7" />
                            <path d="M7.76828 35.4099C4.43345 35.4099 2.76604 35.4099 1.52592 34.3763C1.16656 34.0767 0.766369 33.6038 0.530456 33.1998C-0.283635 31.8057 -0.0385098 30.3454 0.451743 27.4248C0.87839 24.8831 1.49577 22.4038 2.29854 20.4657C3.98552 16.393 6.45817 12.6924 9.5753 9.57527C12.6924 6.45814 16.393 3.98548 20.4657 2.2985C22.4038 1.49573 24.8832 0.878346 27.4248 0.451703C30.3454 -0.0385471 31.8057 -0.283676 33.1998 0.530419C33.6038 0.766331 34.0768 1.16652 34.3763 1.52589C35.4099 2.766 35.4099 4.43341 35.4099 7.76824L35.4099 19.3599C35.4099 26.0469 35.4099 29.3904 33.707 31.7343C33.157 32.4913 32.4913 33.157 31.7344 33.707C29.3905 35.4099 26.047 35.4099 19.3599 35.4099L7.76828 35.4099Z" fill="#FDFCF7" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-md md:text-2xl lg:text-3xl  lg:pt-5 md:pt-3 pt-0 text-center text-white">Science Fiction</h1>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;