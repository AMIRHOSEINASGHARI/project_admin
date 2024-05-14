// cmp
import { Document, Edit, EyeOpen, MenuDots } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import { Popover } from "antd";

const CommentAction = ({ _id, answer, status, published }) => {
  const content = (
    <div className="p-2 flex flex-col gap-1">
      <CustomButton
        title={
          <div
            className={`flex items-center hoverable p-btn gap-btn rounded-btn ${
              published && "bg-gray-200"
            }`}
          >
            <EyeOpen />
            <p>Published</p>
          </div>
        }
      />
      <CustomButton
        title={
          <div
            className={`flex items-center hoverable p-btn gap-btn rounded-btn ${
              !published && "bg-gray-200"
            }`}
          >
            <Document />
            <p>Draft</p>
          </div>
        }
      />
    </div>
  );

  return (
    <div className="flex items-center gap-1">
      <CustomButton
        title={<Edit size={18} />}
        classNames="hoverable p-2 rounded-btn"
      />
      <Popover
        overlayInnerStyle={{
          padding: "0",
        }}
        content={content}
        trigger="click"
        placement="leftTop"
      >
        <CustomButton
          type="button"
          icon={<MenuDots size={18} />}
          classNames="hoverable p-2 rounded-btn"
        />
      </Popover>
    </div>
  );
};

export default CommentAction;
