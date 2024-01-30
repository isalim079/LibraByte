import BookDetails from "@/components/AllBookDashboard/BookDetailsPage/BookDetails";


const page = ({params}) => {
    // console.log(params.bookDetails);
    return (
        <div>
            <BookDetails params={params} />
        </div>
    );
};

export default page;