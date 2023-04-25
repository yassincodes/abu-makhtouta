import { Link } from "react-router-dom";
import Body from "./Body";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row-revers",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "3px 10px",
          borderRadius: "10px",
          margin: "2vh 8vw",
        }}
        className="header"
      >
        <div
          style={{
            background: "#e74c3c",
            fontSize: "1.2em",
            color: "white",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {" "}
          📜{" "}
        </div>

        <div>
          <span>أبو مخطوطة </span>
        </div>
        <div>
          {" "}
          <img
            style={{ width: "35px" }}
            src="https://i.redd.it/snoovatar/avatars/c7188bf6-e14f-4047-be02-a8df1d9bba00.png"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "2vh 4vw" }}>
          <div
            dir="rtl"
            style={{
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2em",
            }}
          >
            "أبو مخطوطة" هو شخصية إفتراضية لمساعدة المعلمين في إعداد دروس
            التاريخ, ومساعدة التلاميذ في التعرف عن المزيد حول المادة بطريق مسلية
            تتماشى مع أسئلتهم ومع ما يدور في أذهانهم, تعمل هذه الشخصية عن طريق
            تكنولوجيا الذكاء الصناعي .. يمكنك القيام بتجربة عن طريق الضغط على
            الزر في الأسفل
          </div>
          <Link to="/chat" className="button action-confirm-email">
            <span>بدأ المحادثة</span>
          </Link>
        </div>
      </div>
      <div>
        <Body />
      </div>
    </>
  );
}

export default Home;
