import { Link } from "react-router-dom";
import { Avatar } from "@chatscope/chat-ui-kit-react";
function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "60vh",
        border: "2px solid gray",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        <Avatar
          src={
            "https://carthagemagazine.com/wp-content/uploads/2020/12/tarek-gharbi-ibn-khaldoun-portraits-2-p-1.jpg"
          }
          name={"Zoe"}
          status="available"
          size="fluid"
        />
      </div>
      <div style={{ width: "50vw" }}>
        أهلا, أنا أبو مخطوطة, شخصية إفتراضية لمساعدة المعلمين في إعداد دروس
        التاريخ ولمساعدة التلاميذ في تعلم المزيد عن التاريخ
      </div>
      <div>
        <Link to="/chat">بدأ المحادثة</Link>
      </div>
    </div>
  );
}

export default Home;
