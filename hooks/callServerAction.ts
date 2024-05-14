"use client";

// react
import { useState } from "react";
// components
import toast from "react-hot-toast";

const useServerAction = (
  asyncAction: Function,
  fnInput: object,
  afterAction?: Function
): { loading: boolean; fn: Function } => {
  // asyncAction => to calling server action
  // fnInput => the input of server action
  // afterAction => the action we want to be done after the server action is done

  const [loading, setLoading] = useState<boolean>(false);

  const fn = async () => {
    setLoading(() => true);
    const result = await asyncAction(fnInput);
    setLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      afterAction && afterAction();
    }
  };

  return {
    loading,
    fn,
  };
};

export default useServerAction;
