import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

const CampaignDetailsHook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [campaignData, setCampaignData] = useState<any>(null);

  const campaignId = useSelector((state: any) => state.campaign.id);
  const toast = useToast();

  // get campaign details data
  const query = useQuery(["campaign"] as any, () => {
    return axios.get(
      `https://www.optimizekwtestingserver.com/testdemo/public/campaigndetail/${campaignId}`
    );
  });

  // loading
  useEffect(() => {
    const isLoad = query?.isLoading;
    setLoading(isLoad);
  }, [query?.isLoading]);

  // error
  useEffect(() => {
    if (query?.error) {
      toast.show("something went wrong", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    }
  }, [query?.error]);

  // data
  useEffect(() => {
    if (query?.data?.data?.data) {
      return setCampaignData(query?.data?.data?.data);
    }
  }, [query?.data]);

  return { loading, campaignData };
};

export { CampaignDetailsHook };
