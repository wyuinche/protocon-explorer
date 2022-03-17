/**
 * Copyright (c) 2022 Protocon Network. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

// Protocon Explorer React components
import PEOverviewAttribute from "components/PEOverviewAttribute";

function LandData({ address, area, renter, account, rent, period }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      px={5}
      pb={3}
      mb={1}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            Details - Land Data
          </MDTypography>
        </MDBox>
        <PEOverviewAttribute title="Address" value={address} />
        <PEOverviewAttribute title="Area" value={area} />
        <PEOverviewAttribute title="Renter" value={renter} />
        <PEOverviewAttribute title="Account" value={account} url={`/account/${account}`} />
        <PEOverviewAttribute title="Rent Date" value={rent} />
        <PEOverviewAttribute title="Period" value={period} />
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the Bill
LandData.propTypes = {
  address: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  renter: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  rent: PropTypes.string.isRequired,
  period: PropTypes.number.isRequired,
};

export default LandData;