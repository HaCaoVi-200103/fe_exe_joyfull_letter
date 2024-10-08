import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  districtGetAPI,
  provinceGetAPI,
  wardGetAPI,
} from "../../api/apiLocationVN";
interface Province {
  ProvinceID: number;
  ProvinceName: string;
}
interface District {
  DistrictID: number;
  DistrictName: string;
}

interface Ward {
  WardCode: number;
  WardName: string;
}

const AddressSelect = () => {
  const [listProvince, setListProvince] = useState<Province[]>([]);
  const [provinceId, setProvinceId] = useState<number>(-1);
  const [listDistrict, setListDistrict] = useState<District[]>([]);
  const [districtId, setDistrictId] = useState<number>(-1);
  const [listWard, setListWard] = useState<Ward[]>([]);
  const [wardCode, setWardCode] = useState<string>("");

  console.log(wardCode);

  useEffect(() => {
    (async () => {
      try {
        const dataProvince = await provinceGetAPI();
        if (!dataProvince) {
          console.log("call api provice fails");
        }
        setListProvince(dataProvince.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (provinceId !== -1) {
      (async () => {
        try {
          const dataDistrict = await districtGetAPI(provinceId);
          if (!dataDistrict) {
            console.log("call api district fails");
          }
          setListDistrict(dataDistrict.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [provinceId]);

  useEffect(() => {
    if (districtId !== -1) {
      (async () => {
        try {
          const dataWard = await wardGetAPI(districtId);
          if (!dataWard) {
            console.log("call api district fails");
          }
          setListWard(dataWard.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [districtId]);
  return (
    <Row className="mb-3 ">
      <Col className="p-0">
        <Form.Select
          onChange={(e) => setProvinceId(parseInt(e.target.value))}
          aria-label="Default select example"
        >
          <option>Province / City</option>
          {listProvince &&
            listProvince.length > 0 &&
            listProvince.map((item, index) => (
              <option value={item.ProvinceID} key={index}>
                {item.ProvinceName}
              </option>
            ))}
        </Form.Select>
      </Col>
      <Col>
        <Form.Select
          onChange={(e) => setDistrictId(parseInt(e.target.value))}
          aria-label="Default select example"
        >
          <option>District</option>
          {listDistrict &&
            listDistrict.length > 0 &&
            listDistrict.map((item, index) => (
              <option value={item.DistrictID} key={item.DistrictID + index}>
                {item.DistrictName}
              </option>
            ))}
        </Form.Select>
      </Col>
      <Col className="p-0">
        <Form.Select
          onChange={(e) => setWardCode(e.target.value)}
          aria-label="Default select example"
        >
          <option>Ward / Commune</option>
          {listWard &&
            listWard.length > 0 &&
            listWard.map((item, index) => (
              <option value={item.WardCode} key={item.WardCode + index}>
                {item.WardName}
              </option>
            ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default AddressSelect;
