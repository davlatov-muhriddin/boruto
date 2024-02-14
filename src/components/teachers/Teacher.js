import Styles from "./teacher.module.css"
import {useState} from "react";

function Teacher() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      title: "Uchiha Saske",
      image: "https://interesnoewmire.ru/wp-content/uploads/saske-uchiha-90-foto-artov-i-kartinok-9e2913c.jpg"
    },
    {id: 2, title: "Uzumaki Naruto", image: "https://www.greenscene.co.id/wp-content/uploads/2022/04/Naruto-3.jpg"},
    {id: 3, title: "Namikaze Minato", image: "https://static.zerochan.net/Namikaze.Minato.full.2585944.jpg"},
    {id: 4, title: "Otsutsuki Momoshiki", image: "https://w.forfun.com/fetch/f6/f64f47da748e3a4e38f21557922fbc98.jpeg"}
  ]);
  return (
    <div className={Styles.teachers} id={"teachers"}>
      <h1>Teacher</h1>
      <div className={Styles.teacherCards}>
        {teachers.map((teacher) => (
          <div className={Styles.teacherCard}>
            <img src={teacher.image} alt={teacher.title}/>
            <h1>{teacher.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teacher;