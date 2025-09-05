import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch h-[1514px] border border-solid border-black">
				<span className="text-[#00FFC3] text-[27px] font-bold mt-5 mb-7 mx-5" >
					{"Pieta"}
				</span>
				<div className="flex items-center self-stretch mb-4 mx-5 gap-5">
					<div className="flex-1 bg-[#1A1A1AFA] py-5 rounded-xl" 
						style={{
							boxShadow: "0px 0px 15px #00FFFF4D"
						}}>
						<div className="flex flex-col items-start self-stretch bg-[#E5E3DF] pt-52 pb-[101px] mx-5">
							<div className="flex flex-col items-end self-stretch mb-[41px] ml-[432px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/3qw5fk80_expires_30_days.png"} 
									className="w-[1px] h-[1px] object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/02zlim2c_expires_30_days.png"} 
									className="w-[1px] h-[1px] object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/phwuv9bu_expires_30_days.png"} 
									className="w-[1px] h-[1px] mb-[105px] object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/ou97qgw6_expires_30_days.png"} 
									className="w-[1px] h-[1px] mb-[104px] object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/nqipxti2_expires_30_days.png"} 
									className="w-[1px] h-[1px] mb-[104px] object-fill"
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/j0cpx0k2_expires_30_days.png"} 
									className="w-[1px] h-[1px] object-fill"
								/>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/x4hdl8pn_expires_30_days.png"} 
								className="w-[1px] h-[1px] mb-[194px] ml-[539px] object-fill"
							/>
							<div className="self-stretch h-[1px] mb-[90px] ml-[1090px] mr-[109px]">
							</div>
							<div className="flex flex-col items-end self-stretch">
								<div className="flex items-start mr-[61px]">
									<div className="flex flex-col shrink-0 items-center pb-[1px] px-1.5">
										<span className="text-black text-[10px]" >
											{"Keyboard shortcuts"}
										</span>
									</div>
									<span className="text-black text-[10px] mx-1.5" >
										{"Map data ©2025 TMap Mobility"}
									</span>
									<div className="flex flex-col shrink-0 items-start bg-neutral-100 px-[5px] mx-[1px]">
										<span className="text-black text-[10px]" >
											{"Terms"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-start bg-[#1A1A1A] pt-[39px] pb-[19px] rounded-2xl" 
						style={{
							boxShadow: "0px 0px 15px #00FFB433"
						}}>
						<span className="text-[#00FFC3] text-lg font-bold mt-[1px] mb-[19px] ml-5 mr-[529px]" >
							{"부대 현황"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/5ovg247g_expires_30_days.png"} 
							className="w-[580px] h-[580px] mx-5 rounded-2xl object-fill"
						/>
					</div>
				</div>
				<div className="flex items-center self-stretch mb-[17px] mx-5 gap-5">
					<div className="flex flex-1 flex-col items-start bg-[#1A1A1A] pt-[39px] pb-[78px] rounded-2xl" 
						style={{
							boxShadow: "0px 0px 15px #00FFB433"
						}}>
						<span className="text-[#00FFC3] text-lg font-bold mt-[1px] mb-5 mx-5" >
							{"병사 검색"}
						</span>
						<input
							placeholder={"병사 이름을 입력하세요..."}
							value={input1}
							onChange={(event)=>onChangeInput1(event.target.value)}
							className="self-stretch text-[#757575] bg-[#111111] text-sm py-[9px] pl-2.5 pr-5 mb-[19px] mx-5 rounded-lg border-0" 
							style={{
								boxShadow: "0px 0px 10px #00FFC34D"
							}}
						/>
						<span className="text-[#FF4D4D] text-lg font-bold mt-0.5 mb-[21px] mx-5" >
							{"긴급 알림"}
						</span>
						<input
							placeholder={"⚠️ 위급 알림: 일병 임지민의 심정지"}
							value={input2}
							onChange={(event)=>onChangeInput2(event.target.value)}
							className="self-stretch text-[#FF6666] bg-[#220000] text-base font-bold py-4 pl-4 pr-8 mb-[18px] mx-5 rounded-[10px] border border-solid border-[#FF4444]" 
							style={{
								boxShadow: "0px 0px 15px #FF464699"
							}}
						/>
						<input
							placeholder={"⚠️ 위급 알림: 일병 서광현의 무호흡 증상"}
							value={input3}
							onChange={(event)=>onChangeInput3(event.target.value)}
							className="self-stretch text-[#FF6666] bg-[#220000] text-base font-bold py-4 pl-4 pr-8 mx-5 rounded-[10px] border border-solid border-[#FF4444]" 
							style={{
								boxShadow: "0px 0px 15px #FF464699"
							}}
						/>
					</div>
					<div className="flex flex-col shrink-0 items-start bg-[#1A1A1A] pt-[39px] pb-5 rounded-2xl" 
						style={{
							boxShadow: "0px 0px 15px #00FFB433"
						}}>
						<span className="text-[#00FFC3] text-lg font-bold mt-[1px] mb-[18px] ml-5 mr-[534px]" >
							{"대시보드"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UG7ueamYkb/ba9dvnbk_expires_30_days.png"} 
							className="w-[580px] h-[290px] mx-5 rounded-2xl object-fill"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
