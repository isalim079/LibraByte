import AuthorTalksBlog from "../MyBlog/AuthorTalks/AuthorTalksBlog";
import AuthorImage from "./AuthorImage/AuthorImage";

import PostField from "./PostField/PostField";


const MiddleSideSection = () => {
    return (
        <div>
            <PostField />
            <AuthorTalksBlog />
            <AuthorImage />
        </div>
    );
};

export default MiddleSideSection;