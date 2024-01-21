import AuthorImage from "./AuthorImage/AuthorImage";
import AuthorTalks from "./AuthorTalks/AuthorTalks";
import PostField from "./PostField/PostField";


const MiddleSideSection = () => {
    return (
        <div>
            <PostField />
            <AuthorTalks />
            <AuthorImage />
        </div>
    );
};

export default MiddleSideSection;