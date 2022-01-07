import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MetaData from "./MetaData";
import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import NavLeft from "./NavLeft/index.js";
import NavRight from "./NavRight";
import MenuButton from "./MenuButton";
// import { getClientWidth } from "../utilities/getClientWidth";

const Home = () => {
	const [toggle, setToggle] = useState(false);
	let headerRef = useRef(null);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	// Sticky header
	// ----------------------------------------------------------------

	function handleScroll() {
		const navbarFixed = headerRef.current;

		const page = document.querySelector("html");

		const controlSticky = () => {
			//
			const doScroll = page.scrollTop;
			if (doScroll >= 10) {
				navbarFixed.classList.add("sticked");
			} else {
				navbarFixed.classList.remove("sticked");
			}
		};

		if (page.scrollTop > 94) {
			navbarFixed.classList.add("sticked");
		}

		["bind", "ready", "scroll"].forEach((evt) => {
			page.addEventListener(evt, controlSticky(), false);
		});
	}

	return (
		<Fragment>
			<MetaData title="Home Page" />
			<div className="wrapper">
				<header ref={headerRef}>
					<div className="container">
						<nav className="navigation-top clearfix">
							<div className="navigation-top-left">
								<Link className="box" to="#!">
									<i className="fa fa-facebook"></i>
								</Link>
								<Link className="box" to="#!">
									<i className="fa fa-twitter"></i>
								</Link>
								<Link className="box" to="#!">
									<i className="fa fa-youtube"></i>
								</Link>
							</div>

							<div className="navigation-top-right">
								<Link className="box" to="#!">
									<i className="icon icon-star"></i>
									Special offers
								</Link>
								<Link className="box" to="#!">
									<i className="icon icon-tag"></i>
									Reservations
								</Link>
								<Link className="box" to="#!">
									<i className="icon icon-phone-handset"></i>
									(01) 252-3333
								</Link>
							</div>
						</nav>

						<nav className="navigation-main clearfix">
							<div className="logo animated fadeIn">
								<Link to="#!">
									<img className="logo-desktop" src={logo} alt="Alternate Text" />
									<img className="logo-mobile" src={logoMobile} alt="Alternate Text" />
								</Link>
							</div>

							<MenuButton toggle={toggle} setToggle={setToggle} headerRef={headerRef} />

							<div className={`${toggle ? "open" : ""} navigation-block clearfix`}>
								<NavLeft />
								<NavRight />
							</div>
						</nav>
					</div>
				</header>
			</div>
			<div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, minus vitae eum facilis
					eligendi recusandae exercitationem debitis perferendis quaerat laborum, commodi, nesciunt
					ipsa a autem quam non praesentium cumque est totam voluptatum necessitatibus quidem. Natus
					voluptas, asperiores voluptate odit corporis molestiae eius, culpa nemo totam ullam rerum
					cumque incidunt praesentium id corrupti saepe quaerat voluptates quo ut, voluptatem ad
					laboriosam. Non perspiciatis reprehenderit ea corrupti magni porro consectetur vel, veniam
					ut incidunt odit dolorum itaque ipsam, at illo dolor excepturi sequi temporibus odio. Ipsa
					totam at natus, porro vitae animi, voluptatibus, officia sit adipisci esse pariatur
					assumenda? Sint suscipit nulla exercitationem dolorum et. Asperiores quasi, reiciendis
					minus facere dolores eaque, officia corrupti iste blanditiis qui dicta! Consequatur
					aliquid mollitia autem amet repellat, unde necessitatibus molestias blanditiis ab, ratione
					architecto temporibus consectetur explicabo quo fuga iste repellendus excepturi omnis
					neque accusantium repudiandae maxime. Ipsum perspiciatis, dignissimos voluptates
					necessitatibus est ratione, quae provident officia fuga illo odio id? Voluptate
					dignissimos ipsum corrupti eveniet et? Placeat, dignissimos libero beatae quae
					perspiciatis sunt odit blanditiis! Officiis fugit placeat tenetur reiciendis officia hic
					recusandae dolore repudiandae, distinctio porro fuga sed! Autem inventore eos
					necessitatibus dolores corporis suscipit ea voluptas atque optio temporibus ipsa magnam
					quos, ratione consequatur magni facilis delectus praesentium unde distinctio ut illum
					asperiores voluptate. Neque temporibus sapiente nemo harum odio unde molestiae, iure nisi,
					inventore ipsa et voluptatibus amet similique natus reiciendis laboriosam? Voluptatem
					dicta minus est, maxime ex, tempore error, eius doloremque ducimus molestiae velit
					officia! Dolores dicta suscipit fuga consequuntur? Ex odit pariatur id, consectetur
					veritatis, et molestiae quas, recusandae omnis quasi fugiat? Eos dolore labore
					accusantium, nobis cupiditate provident voluptatibus tenetur delectus quibusdam vitae,
					perspiciatis itaque sapiente! Quaerat nostrum sapiente nobis eius. Fuga magnam quod nemo
					odio praesentium id, sed ullam dicta at nobis, unde itaque quos mollitia atque eaque
					expedita repellendus reiciendis eum aut reprehenderit. Assumenda libero quos, repudiandae
					amet maiores nostrum pariatur tempora accusamus incidunt facere magni labore consectetur
					aliquam eos? Unde quod alias hic impedit repellendus quos, a et nulla! Cupiditate delectus
					eveniet facere quasi! Sint quas nihil quisquam delectus voluptas maiores accusamus
					facilis. Fugiat quos autem unde, facilis sint molestiae laboriosam, modi earum porro
					aliquam rerum repellat veritatis sed inventore? Minus, architecto magni. Quia nesciunt
					dignissimos veniam exercitationem a ab nobis? Fugit, debitis! Nam sequi libero, dicta
					voluptatem rem velit nostrum doloribus iusto, magni eos illo voluptas, voluptatibus
					possimus repellat. Quod enim harum corrupti recusandae libero? Sapiente possimus nemo
					laboriosam temporibus sunt praesentium expedita inventore ad neque, reprehenderit nihil,
					non, dolor doloribus! Deleniti itaque iste excepturi voluptas autem dolor nemo earum.
					Blanditiis eius qui magni! Expedita illo ab, deleniti iure illum nostrum exercitationem
					corporis! Dolorum eveniet error asperiores. Unde, similique. Eveniet aliquid corrupti,
					modi neque itaque ut quasi incidunt facilis blanditiis quibusdam voluptate, ea ratione
					ipsum recusandae fugiat asperiores. Esse, illum ratione cum rerum nisi quae voluptatibus
					dolores error distinctio tempora. Aliquam voluptatibus, dolorum possimus ipsam recusandae
					repellat minima sit doloremque tempora ratione? Sit laboriosam possimus deleniti accusamus
					exercitationem! Aliquid pariatur incidunt ea dolorum magnam. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Voluptates doloribus excepturi assumenda iusto et, non
					exercitationem dolore quis molestiae! Corporis fugit suscipit vel iure necessitatibus
					excepturi nesciunt provident, porro minima sapiente eaque tempora vero facilis
					perspiciatis corrupti odit, tenetur adipisci explicabo itaque sint pariatur laborum.
					Voluptas eum, dolore voluptatem in harum optio molestiae blanditiis laboriosam facilis
					dicta vel, iure labore. Commodi quae ullam exercitationem maiores possimus enim earum,
					iusto ex nihil maxime praesentium accusantium quo, saepe nostrum minus voluptas nisi
					eligendi labore, dolore quod dolorem? Exercitationem voluptatem ratione recusandae id. A
					repellendus delectus itaque vero dicta quae, quod voluptatum repudiandae impedit nulla
					maxime mollitia pariatur provident aperiam molestiae, ullam aut est deserunt corporis
					eaque totam! Non vitae unde autem delectus, ducimus fugiat sapiente adipisci doloribus
					consequatur repellat iste distinctio ipsam maxime necessitatibus reiciendis ipsa natus
					impedit? Aliquid porro enim saepe in dicta officia. Ullam laborum et ut eum sapiente
					consectetur labore iusto perspiciatis quibusdam eius dicta inventore doloremque totam,
					ipsum ipsa repellendus atque veniam illum dolore nemo id. Soluta excepturi sed quia saepe,
					expedita accusantium facere distinctio impedit quidem tempora blanditiis quibusdam non
					animi, culpa officiis cupiditate eveniet ducimus fuga rerum, amet cum. Praesentium est
					iusto voluptatum corporis cumque atque facilis, quidem nulla molestiae hic. Laboriosam
					ipsam quas praesentium, velit accusamus hic modi ratione, quae voluptates, odio ipsum
					officiis obcaecati? Voluptatem eius commodi, numquam ad eaque officiis nisi accusantium
					iste nostrum. Et perspiciatis itaque beatae provident, dignissimos exercitationem corporis
					pariatur dolor recusandae repudiandae aspernatur, quo, repellendus quasi? Voluptas cum
					architecto quaerat facere ullam mollitia numquam fugit voluptate modi praesentium officia
					sapiente, quis commodi velit expedita dignissimos soluta dicta magnam non animi natus
					dolor omnis aspernatur excepturi! Obcaecati nulla fugit minima modi quidem molestias iure
					fuga provident, eius repellendus delectus quae nesciunt, unde illo eligendi nobis soluta
					dolor minus amet explicabo!
				</p>
			</div>
		</Fragment>
	);
};;

export default Home;
