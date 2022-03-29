import React from "react";
import RashSelfIcon from "../assets/images/rashmi.svg";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
	UserWrapper,
	UserTitle,
	UserDescription,
	DownloadButton,
	UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout>
			<UserWrapper>
				<UserTitle>
					Jinwei <span>Zhang</span>
				</UserTitle>
				<UserDescription>
					<div>
						<p>
							Hello there, welcome to my portfolio. I am a Freelancer,
							Machine Learning Engineer and Computer Scientist
							based in China. Please hire me if you find my skill-set relevant.
						</p>
						<DownloadButton
							href="https://github.com/jinwei14/gatsby-github-pages/blob/main/Jinwei_Zhang_CV.pdf"
							download
							title="Resume"
						>
							Download Resume
						</DownloadButton>
					</div>
					<img src={RashSelfIcon} alt="jinwei self" />
				</UserDescription>
				<UserTopic>
					{about.map((item) => (
						<AboutBox key={item.id} info={item} />
					))}
				</UserTopic>
			</UserWrapper>
		</Layout>
	);
};

export default IndexPage;
