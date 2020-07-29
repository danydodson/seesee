# send a request to test the processing:
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"data":"my-data"}' \
  http://localhost:3000/api/v1/processData


# Results saved
# requestId: x , resultsData: my-data-processed