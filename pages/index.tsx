import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { List, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";

const containsDetails: { icon: IconProp; listItemText: string }[] = [
  {
    icon: ["fas", "code"],
    listItemText: "Typescript Support",
  },
  {
    icon: ["fab", "font-awesome"],
    listItemText: "FontAwesome Icons",
  },
  {
    icon: ["fas", "globe"],
    listItemText: "Axios",
  },
  {
    icon: ["fab", "wpforms"],
    listItemText: "Formik + Yup",
  },
  {
    icon: ["fas", "adjust"],
    listItemText: "Material UI (core + lab)",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Typography variant="h4" align="center" gutterBottom>
          Hello from NextJS + Typescript Starter Template
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          The starter pack, out of the box, comes equipped with:
        </Typography>
        <List>
          {containsDetails.map(({ icon, listItemText }, index) => (
            <ListItem key={index} icon={icon} listItemText={listItemText} />
          ))}
        </List>
      </Layout>
    </div>
  );
}
