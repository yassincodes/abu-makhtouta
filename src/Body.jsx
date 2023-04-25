import image1 from "./assets/image1.png";

function Body() {
  return (
    <div dir="rtl" style={{ margin: "2vh 8vw" }}>
      <div>
        <span
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "3px",
            marginBottom: "50px"
          }}
        >
          معلومات حول الموقع
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px"
          }}
        >
          <img
            style={{ width: "150px" }}
            src="https://i.redd.it/snoovatar/avatars/c7188bf6-e14f-4047-be02-a8df1d9bba00.png"
          />
          <div
            style={{
              background: "white",
              margin: "10px",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <div dir="rtl">
              💡 يهدف الموقع ليكون مساعدا شخصيا للمعلمين والتلاميذ الراغبين في
              تعلم التاريخ
            </div>
            <div>
              📋 يمكنك إضافة أسئلة جديدة لقسم الأسئلة, وسيتم تسجيلها اليا في
              قاعدة البيانات لتظهر للجميع
            </div>
            <div>
              👨‍💻 التكنولوجيا الموظفة في بناء الموقع هي نفسها التي تشغل ChatGPT
              ولكن مع بعض التعديلات
            </div>
            <div>
              📖 قمنا بإعطاء الذكاء الصناعي شخصية مدرس تاريخ يتحدث العربية
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
