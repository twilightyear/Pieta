import React, {useState} from "react";
import "./index.css"
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="contain">
			<div className="scroll-view">
				<span className="text" >
					{"Pieta"}
				</span>
				<div className="row-view">
					<div className="view">
						<div className="column">
							<div className="column2">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/3qw5fk80_expires_30_days.png"} 
									className="image"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/02zlim2c_expires_30_days.png"} 
									className="image"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/phwuv9bu_expires_30_days.png"} 
									className="image2"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/ou97qgw6_expires_30_days.png"} 
									className="image3"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/nqipxti2_expires_30_days.png"} 
									className="image3"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/j0cpx0k2_expires_30_days.png"} 
									className="image"
								/>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/x4hdl8pn_expires_30_days.png"} 
								className="image4"
							/>
							<div className="box">
							</div>
							<div className="view2">
								<div className="row-view2">
									<div className="view3">
										<span className="text2" >
											{"Keyboard shortcuts"}
										</span>
									</div>
									<span className="text3" >
										{"Map data ©2025 TMap Mobility"}
									</span>
									<div className="view4">
										<span className="text2" >
											{"Terms"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="column3">
						<span className="text4" >
							{"부대 현황"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/5ovg247g_expires_30_days.png"} 
							className="image5"
						/>
					</div>
				</div>
				<div className="row-view3">
					<div className="column4">
						<span className="text5" >
							{"병사 검색"}
						</span>
						<input
							placeholder={"병사 이름을 입력하세요..."}
							value={input1}
							onChange={(event)=>onChangeInput1(event.target.value)}
							className="input"
						/>
						<span className="text6" >
							{"긴급 알림"}
						</span>
						<input
							placeholder={"⚠️ 위급 알림: 일병 임지민의 심정지"}
							value={input2}
							onChange={(event)=>onChangeInput2(event.target.value)}
							className="input2"
						/>
						<input
							placeholder={"⚠️ 위급 알림: 일병 서광현의 무호흡 증상"}
							value={input3}
							onChange={(event)=>onChangeInput3(event.target.value)}
							className="input3"
						/>
					</div>
					<div className="column5">
						<span className="text7" >
							{"대시보드"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/ba9dvnbk_expires_30_days.png"} 
							className="image6"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
