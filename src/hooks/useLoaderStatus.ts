import {
  LoaderStateStatus,
  selectLoaderState,
} from "@src/store/slices/loader.slice";
import { useAppSelector } from "@src/store/store";

const useLoaderStatus = () => {
  const { status } = useAppSelector(selectLoaderState);

  const isInitial = status === LoaderStateStatus.INITIAL;
  const isError = status === LoaderStateStatus.ERROR;
  const isSolving = status === LoaderStateStatus.SOLVING;

  return { status, isError, isSolving, isInitial };
};

export default useLoaderStatus;
