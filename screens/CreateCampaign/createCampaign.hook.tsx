import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import { setId } from "../../redux/reducer/campaign";

interface ICreateCampaignHook {
  navigation: any;
}

const CreateCampaignHook = ({ navigation }: ICreateCampaignHook) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [adNameValue, setAdNameValue] = useState<string>("");
  const [objectiveValue, setObjectiveValue] = useState<string>("");
  const [adNameError, setAdNameError] = useState<string | null>(null);
  const [objectiveError, setObjectiveError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const toast = useToast();

  // post campaign data
  const mutation = useMutation((campaignData) => {
    return axios.post(
      "https://www.optimizekwtestingserver.com/testdemo/public/campaign",
      campaignData
    );
  });

  // loading
  useEffect(() => {
    const isLoad = mutation?.isLoading;
    setLoading(isLoad);
  }, [mutation?.isLoading]);

  // error
  useEffect(() => {
    if (mutation?.error) {
      toast.show("something went wrong", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    }
  }, [mutation?.error]);

  // data
  useEffect(() => {
    if (mutation?.data?.data) {
      dispatch(setId({ id: mutation?.data?.data?.data?.id }));

      setAdNameValue("");
      setObjectiveValue("");

      return navigation?.navigate("CampaignDetailsScreen");
    }
  }, [mutation?.data]);

  // form submit
  const submitHandel = () => {
    let isAdNameError = false;
    let isObjectiveError = false;

    // ad name validation
    if (adNameValue === "") {
      isAdNameError = true;
      setAdNameError("Ad name can't be blank");
    } else {
      isAdNameError = false;
      setAdNameError(null);
    }

    // objective validation
    if (objectiveValue === "") {
      isObjectiveError = true;
      setObjectiveError("Objective can't be blank");
    } else {
      isObjectiveError = false;
      setObjectiveError(null);
    }

    // post data
    if (!isAdNameError && !isObjectiveError) {
      return mutation?.mutate({
        name: adNameValue,
        objective: objectiveValue,
      } as any);
    }
  };

  return {
    adNameValue,
    objectiveValue,
    setAdNameValue,
    setObjectiveValue,
    adNameError,
    objectiveError,
    submitHandel,
    loading,
  };
};

export { CreateCampaignHook };
