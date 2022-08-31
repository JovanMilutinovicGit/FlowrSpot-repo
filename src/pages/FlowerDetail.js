import React from "react";
import heroDetail from "../assets/heroDetail.png";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button.js";
import "../styles/FlowerDetail.css";
import CardsList from "../components/CardsList";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FlowerDetail = () => {
  const params = useParams();
  const item = useSelector((state) => state.flowrs[params.id]);

  console.log(item.name);
  return (
    <div className="flowerDetail">
      <div className="heroDetail">
        <img id="imgHero" src={heroDetail} />
        <div className="flowrImg">
          <img id="imgFlower" src={item.profile_picture} />
        </div>
        <div className="heroDetailRight">
          <div className="fav">
            <i className="fa fa-star"></i>
            <span>{item.sightings} sightings</span>
          </div>
          <div className="descAndBtn">
            <div className="desc">
              <h2>
                <span>{item.name}</span>
              </h2>
              <p>{item.latin_name}</p>
            </div>
            <div className="btnAdd">
              <Link to="/newSighting">
                <Button name={"+Add New Sighting"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptionDetail">
        <div className="leftSideDescription">
          <p>Kingdom: Plantae</p>
          <p>Order: Asterales</p>
          <p>Family: Campanulaceae</p>
          <p>Species: P. grandiflorus</p>
        </div>
        <div className="rightSideDescription">
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2] <br /> <br />
            <br />
            Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an
            herbaceous perennial with dark green leaves and blue flowers in late
            summer. A notable feature of the plant is the flower bud which
            swells like a balloon before fully opening.[4] The five petals are
            fused together into a bell shape at the base, like its relatives,
            the campanulas. There are varieties with white, pink and purple
            blooms in cultivation.[5] In Korea, white flowers are more common.
            This plant[6] together with its cultivars 'Apoyama group'[7] and
            'Mariesii'[8] have gained the Royal Horticultural Society's Award of
            Garden Merit.
          </p>
        </div>
      </div>
      <div className="listCards">
        <CardsList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ flowrs}) => {
  return { flowers: flowrs };
};
export default connect(mapStateToProps)(FlowerDetail);
