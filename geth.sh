clef --keystore data/keystore --configdir config/clef 

geth --cache 10240 --datadir /home/ubuntu/data/geth --syncmode snap \
--http --http.api web3,eth,net,personal,txpool,engine,admin --http.addr 0.0.0.0 --http.port 8545 \
--ws --ws.api web3,eth,net,personal,txpool,engine,admin --ws.addr 0.0.0.0 --ws.port 8546 --ws.origins '*' \
--authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --maxpeers=300 --authrpc.jwtsecret /home/ubuntu/jwt.hex


./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --mainnet --jwt-secret=/home/ubuntu/jwt.hex --checkpoint-sync-url=https://beaconstate.info --genesis-beacon-api-url=https://beaconstate.info

curl -X POST http://127.0.0.1:8545 \
-H "Content-Type: application/json" \
--data '{"jsonrpc":"2.0", "method":"eth_getBalance", "params":["0xca57f3b40b42fcce3c37b8d18adbca5260ca72ec","latest"], "id":1}'

curl -H "Content-type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}'  3.106.143.29:8545

curl -H "Content-type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}'  http://localhost:8545
