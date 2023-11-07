import { getTypedocPage } from "@/components/RenderDoc/TypedocPage";
import Content from "./content.mdx";
import { fetchWalletsDoc } from "@/components/RenderDoc/fetchDocs/fetchWalletsDoc";

const config = getTypedocPage({
	sdkTitle: "Wallets SDK",
	getDoc: fetchWalletsDoc,
	indexContent: <Content />,
	packageSlug: "wallets",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;