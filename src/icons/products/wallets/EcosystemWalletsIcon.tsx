export function EcosystemWalletsIcon(props: { className?: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 10.5289C3 11.2556 3.58914 11.8448 4.31589 11.8448L9.68471 11.8448C10.4115 11.8448 11.0006 11.2556 11.0006 10.5289V5.16065C11.0006 4.4339 10.4115 3.84476 9.68471 3.84476H4.31589C3.58914 3.84476 3 4.4339 3 5.16065L3 10.5289ZM12.9995 10.5289C12.9995 11.2556 13.5886 11.8448 14.3154 11.8448L19.6842 11.8448C20.4109 11.8448 21.0001 11.2556 21.0001 10.5289V5.16065C21.0001 4.4339 20.4109 3.84476 19.6842 3.84476H14.3154C13.5886 3.84476 12.9995 4.4339 12.9995 5.16065V10.5289Z"
				fill="url(#paint0_linear_754_51)"
			/>
			<g filter="url(#filter0_bi_754_51)">
				<path
					d="M4.75208 10.9797C4.75208 10.0438 5.51071 9.28522 6.44653 9.28522H17.551C18.4868 9.28522 19.2454 10.0438 19.2454 10.9797V18.4608C19.2454 19.3966 18.4868 20.1552 17.551 20.1552H6.44653C5.51071 20.1552 4.75208 19.3966 4.75208 18.4608V10.9797Z"
					fill="#B9DDFF"
					fillOpacity="0.8"
				/>
			</g>
			<path
				d="M6.55145 12.0597H9.38006C9.9118 12.0597 10.4078 12.3273 10.6998 12.7717V12.7717C11.3235 13.7211 12.7155 13.7211 13.3392 12.7717V12.7717C13.6312 12.3273 14.1272 12.0597 14.659 12.0597H17.4466"
				stroke="white"
				strokeWidth="0.905836"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<defs>
				<filter
					id="filter0_bi_754_51"
					x="2.9404"
					y="7.47355"
					width="18.1167"
					height="14.4934"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="0.905836" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_754_51"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_754_51"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="0.181167" />
					<feGaussianBlur stdDeviation="0.0452918" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect2_innerShadow_754_51"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_754_51"
					x1="17.4325"
					y1="7.19611"
					x2="6.4966"
					y2="14.6568"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#2567FF" />
					<stop offset="1" stopColor="#22A7FF" />
				</linearGradient>
			</defs>
		</svg>
	);
}
