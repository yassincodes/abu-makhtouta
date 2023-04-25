import Header from "./Header";
import {Link} from "react-router-dom"
function Prompts() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", margin: "2vh 8vw" }}>
        هذا القسم يحتوي مجموعة من الأوامر والأسئلة التي يمكنك أن تستعملها لتحصل
        على أفضل نتيجة ممكنة من إستعمال الموقع, إختر المستوى الدراسي ثم إختر
        الدرس وستعثر على جملة من الأوامر
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Link to="/5" className="route-button">السنة الخامسة</Link>
        <Link to="/6" className="route-button">السنة السادسة</Link>
      </div>
    </div>
  );
}

export default Prompts;
