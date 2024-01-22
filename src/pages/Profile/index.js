import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Account from "../../components/Account";
import { userAccounts } from "../../services/datas/userAccounts";
import { useSelector } from "react-redux";
import ProfileHeader from "../../components/ProfileHeader";
import "./style.scss";

const Profile = () => {
  const token = useSelector((state) => state.user.value.token);

  return (
    <>
      <Header />
      <main className="bg-dark userContainer">
        {token && (
          <>
            <ProfileHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account accounts={userAccounts} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
