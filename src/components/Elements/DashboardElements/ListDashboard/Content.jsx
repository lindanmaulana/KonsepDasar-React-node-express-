const ContentList = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-start w-full border rounded-md border-black/20">
      {children}
    </div>
  );
};

export default ContentList;
