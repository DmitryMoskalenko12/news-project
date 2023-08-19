const useAsideNewsPanel = () => {
                              
  const setDataNews = (data, limit, page, setData, method, setEnded, setLoading, setError) => {

    setLoading(true)
    const res = method(limit, page)
      if (res.length < 10) {
        setEnded(true)
      }
      setData([...data, ...res]);
      setLoading(false)
    if (!res) {
      setError(true)
    }
}

return {setDataNews}
}
export default useAsideNewsPanel;