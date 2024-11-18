import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ArticleBtn() {
  const navigate = useNavigate();
  const acticleBtn = () => {
    navigate("/article");
  };

  return (
    <>
      <Button variant="contained" color="inherit" onClick={acticleBtn}>
        Article
      </Button>
    </>
  );
}
