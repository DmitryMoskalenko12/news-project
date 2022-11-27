const useAsideNewsPanel = () => {
                              
  const setDataNews = (data, limit, page, setData, method, setEnded, setLoading, setError) => {

    setLoading(true)
    method(limit, page)
    .then((res) => {
      if (res.length < 10) {
        setEnded(true)
      }
      setData([...data, ...res]);
      setLoading(false)
    })
    .catch(() => setError(true))
}

return {setDataNews}
}
export default useAsideNewsPanel;