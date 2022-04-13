import { useState } from "react";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/reducer/campaign";
import { useToast } from "react-native-toast-notifications";

interface ICampaignHook {
  navigation: any;
}

const CampaignHook = ({ navigation }: ICampaignHook) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [campaignNameValue, setCampaignNameValue] = useState<string>("");
  const [websiteValue, setWebsiteValue] = useState<string>("");
  const [campaignNameError, setCampaignNameError] = useState<string | null>(
    null
  );
  const [websiteError, setWebsiteError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageData, setImageData] = useState<any>(null);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandel = async () => {
    let isError = false;

    // campaig validation
    if (campaignNameValue === "") {
      isError = true;
      setCampaignNameError("Campaign name can't be blank");
    } else {
      isError = false;
      setCampaignNameError(null);
    }

    // website validation
    if (websiteValue === "") {
      isError = true;
      setWebsiteError("Website url can't be blank");
    } else if (
      !/((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi.test(
        websiteValue
      )
    ) {
      isError = false;
      setWebsiteError("Invalid website url");
    } else {
      isError = false;
      setWebsiteError(null);
    }

    // image validation
    if (!image && !imageData) {
      isError = true;
      setImageError("Image can't be blank");
    } else {
      isError = false;
      setImageError(null);
    }

    if (!isError) {
      // get the extension
      const ext = image?.substring(image.lastIndexOf(".") + 1);

      // get the file name
      const fileName = image?.replace(/^.*[\\\/]/, "");

      // create form data
      let formdata = new FormData() as any;

      formdata.append("name", `${campaignNameValue}`);
      formdata.append("website_url", `${websiteValue}`);
      formdata.append("media", {
        uri: image,
        name: fileName,
        type: `image/${ext}`,
      });

      // config
      let requestOptions: any = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      setLoading(true);

      // post data
      await fetch(
        "https://www.optimizekwtestingserver.com/testdemo/public/creative",
        requestOptions
      )
        .then((response) => response.text())
        .then((result: any) => {
          setLoading(false);
          dispatch(setId({ id: result?.data?.id }));

          // redirect details screen
          return navigation?.navigate("CampaignDetailsScreen");
        })
        .catch((error) => {
          toast.show("something went wrong", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            animationType: "slide-in",
          });
          setLoading(false);
        });
    }
  };

  return {
    loading,
    campaignNameValue,
    websiteValue,
    setCampaignNameValue,
    setWebsiteValue,
    image,
    setImage,
    campaignNameError,
    websiteError,
    submitHandel,
    imageError,
    setImageData,
  };
};

export { CampaignHook };
