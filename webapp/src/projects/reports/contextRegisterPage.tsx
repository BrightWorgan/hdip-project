import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import ContextForm from "./cutFillAddForm";
import ContextTable from "./cutFillTable";
import ReportHeader from "./reportHeader";
const ContextRegister = (props: any) => {
  return (
    <div>
      <h4>Context Register:</h4>
      <ContextTable
      // context={context}
      // onChecked={onChecked}
      // onPrev={offset === 0 ? null : prev}
      // onNext={next}
      />
      {/* <FAB name="Context" onAdd={onToggle} />
      <ModalBackdrop
        header="Add to the Context Regisiter"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={addUser}
      >
        <ContextForm onSubmit={addContext} toggle={onToggle} />
      </ModalBackdrop> */}
    </div>
  );
};
export default ContextRegister;
