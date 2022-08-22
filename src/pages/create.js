import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

import { Link, useNavigate } from "react-router-dom";

export default function Create(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContext();
    const navigate = useNavigate();

    function handleChange(e){
        switch (e.target.name){
            case "title":
                setTitle(e.target.value);
                break;
            case "author":
                setAuthor(e.target.value);
                break;
            case "intro":
                setIntro(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(e.target.value);
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const newBook = {
          id: crypto.randomUUID(),
          title,
          author,
          cover,
          intro,
          completed,
          review,
        };

        //TODO: para registrar un libro
    
        store.createItem(newBook);
        navigate("/");
      }

    function handleChangeFile(e) {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            console.log("RESULT", reader.result);
            setCover(reader.result.toString());
        };
        
    }
    
    const levelFormStyle = {
        padding: "10px",
        display: "block",
        fontSize: "20px",
    };

    const formContainerStyle = {
        padding: "20px",
        justifyContent: "center",
    }

    return(
     <Layout style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
            <div style={levelFormStyle}>
                <div>Título</div>
                <input 
                type="text"
                name="title"
                onChange={handleChange}
                value={title}
                />
            </div>

            <div style={levelFormStyle}>
                <div>Autor</div>
                <input 
                type="text"
                name="author"
                onChange={handleChange}
                value={author}
                />
            </div>

            <div style={levelFormStyle}>
                <div>Portada</div>
                <input 
                type="file"
                name="cover"
                onChange={handleChangeFile}
                />
                <div>{!! cover ? <img src={cover} width="200" alt=""preview /> : ""}</div>
            </div>

            <div style={levelFormStyle}>
                <div>Introducción</div>
                <input 
                type="text"
                name="intro"
                onChange={handleChange}
                value={intro}
                />
            </div>

            <div style={levelFormStyle}>
                <div>Completado</div>
                <input 
                type="checkbox"
                name="completed"
                onChange={handleChange}
                value={completed}
                />
            </div>

            <div style={levelFormStyle}>
                <div>Review por el público </div>
                <input 
                type="text"
                name="review"
                onChange={handleChange}
                value={review}
                />
            </div>

            <input type="submit" value="Register book" />
        </form>
    </Layout>
    );
    } 
