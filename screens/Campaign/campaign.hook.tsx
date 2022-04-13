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
  const [image, setImage] = useState<string | null>(null);

  const [websiteError, setWebsiteError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandel = async () => {
    let isCampaignError = false;
    let isWebsiteError = false;
    let isMediaError = false;

    // campaig validation
    if (campaignNameValue === "") {
      isCampaignError = true;
      setCampaignNameError("Campaign name can't be blank");
    } else {
      isCampaignError = false;
      setCampaignNameError(null);
    }

    // website validation
    if (websiteValue === "") {
      isWebsiteError = true;
      setWebsiteError("Website url can't be blank");
    } else if (
      !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        websiteValue
      )
    ) {
      isWebsiteError = true;
      setWebsiteError("Invalid website url");
    } else {
      isWebsiteError = false;
      setWebsiteError(null);
    }

    // image validation
    if (!image) {
      isMediaError = true;
      setImageError("Image can't be blank");
    } else {
      isMediaError = false;
      setImageError(null);
    }

    if (!isCampaignError && !isWebsiteError && !isMediaError) {
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
          dispatch(setId({ id: result?.data?.id }));

          setCampaignNameValue("");
          setWebsiteValue("");
          setImage(null);

          setLoading(false);

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
  };
};

export { CampaignHook };
