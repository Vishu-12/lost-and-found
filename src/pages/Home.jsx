import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import CustomRating from "../components/CustomRating";
import Awards from "../components/Awards";
import CreateUser from "../components/CreateUser";
import UploadItem from "../components/UploadItem";

export default function Home() {
  return (
    <div>
      <Hero />
      <Organizations />
      {localStorage.getItem("userId") === null && <CreateUser />}
      {localStorage.getItem("userId") !== null && <UploadItem />}
      <CustomRating />
      <Awards />
    </div>
  );
}
