import { Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

function Home() {
  return (
    <>
      <Header />
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
