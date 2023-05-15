/** @format */

import React from "react";
import ReactTooltip from "react-tooltip";
import Styles from "./gitStats.css";
import GitHubCalendar from "react-github-calendar";
import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const GithubStats = () => {
  const [loadingState, setLoadingState] = React.useState(true);
  const [screenW, setScreenW] = React.useState(0);
  const gitCardTheme = useColorModeValue("buefy", "midnight-purple");
  const commonBg = useColorModeValue("#e9d8fd", "#11041c");
  const gitCardBg = useColorModeValue("faf5ff", "0e0311");
  const gitCardBorder = useColorModeValue("none", "c01ac0");

  const customTheme = {
    level0: useColorModeValue("#D6BCFA", "#240840"),
    level1: useColorModeValue("#B794F4", "#44337A"),
    level2: useColorModeValue("#805AD5", "#805AD5"),
    level3: useColorModeValue("#553C9A", "#9F7AEA"),
    level4: useColorModeValue("#56229e", "#D6BCFA"),
  };

  const changeSectionOffset = () => {
    if (screenW <= 350) return 5;
    if (screenW > 350 && screenW <= 480) return 6;
    if (screenW > 480 && screenW <= 768) return 6;
    if (screenW > 768 && screenW <= 991) return 10;
    if (screenW > 991) return 12;
  };

  window.addEventListener("resize", () => setScreenW(window.screen.width));

  React.useState(() => {
    setScreenW(window.screen.width);
    let timeoutID = setTimeout(() => {
      setLoadingState(false);
    }, 3000);

    const cleanup = () => {
      clearTimeout(timeoutID);
    };
    return cleanup;
  }, [loadingState]);

  return (
    <>
      <Box
        position="relative"
        zIndex={100}
        // bg={commonBg}
        id="github"
        px={{ base: "12", sm: "16", md: "20", lg: "24" }}
        pt={{ base: "4", sm: "8", md: "12" }}
        pb={{ base: "8", sm: "12", md: "24" }}
      >
        <Flex
          className={Styles.gitCalHeadingWrapper}
          mb={useColorModeValue(
            { base: "6", sm: "8", md: "12", lg: "16" },
            { base: "12", sm: "16", md: "20", lg: "24" }
          )}
          gap={{ base: "2", sm: "4", md: "6" }}
        >
          <Heading
            className={Styles.gitCalHeading}
            size={{ base: "xs", sm: "md", lg: "lg" }}
          >
            GitHub
          </Heading>
          <Heading
            className={Styles.gitCalHeading}
            size={{ base: "xs", sm: "md", lg: "lg" }}
          >
            Contribution
          </Heading>
          <Heading
            className={Styles.gitCalHeading}
            size={{ base: "xs", sm: "md", lg: "lg" }}
          >
            Graph
          </Heading>
        </Flex>

        <Box
          bg={commonBg}
          className={useColorModeValue(
            "",
            !loadingState && Styles.githubCalendarWrapper
          )}
          boxShadow={useColorModeValue(
            "rgba(0, 0, 0, 0.6) 0px 0px 30px",
            "none"
          )}
          maxW="fit-content"
          borderRadius="lg"
          margin="auto"
          padding="2.5"
        >
          <GitHubCalendar
            username="Ranjan095"
            style={{ margin: "auto" }}
            dateFormat="d MMM, yyyy"
            // showWeekdayLabels={true}
            hideTotalCount={true}
            loading={loadingState}
            theme={customTheme}
            blockRadius={3}
            blockMargin={5}
            blockSize={15}
            fontSize={
              changeSectionOffset() === NaN ? 12 : changeSectionOffset()
            }
          >
            {!loadingState && <ReactTooltip delayShow={20} html />}
          </GitHubCalendar>
        </Box>

        <Flex
          className={Styles.gitCalHeadingWrapper}
          mt={useColorModeValue(
            { base: "8", sm: "12", md: "16", lg: "20" },
            { base: "16", sm: "24", md: "28", lg: "32" }
          )}
          mb={{ base: "6", sm: "8", md: "12", lg: "16" }}
          gap={{ base: "2", sm: "4", md: "6" }}
        >
          <Heading
            className={Styles.gitCalHeading}
            size={{ base: "xs", sm: "md", lg: "lg" }}
          >
            GitHub
          </Heading>
          <Heading
            className={Styles.gitCalHeading}
            size={{ base: "xs", sm: "md", lg: "lg" }}
          >
            Statistics
          </Heading>
        </Flex>

        <Flex
          // border='2px solid yellow'
          className={Styles.gitCalHeadingWrapper}
          rowGap={{ base: "6", sm: "12", md: "16", lg: "20" }}
          wrap="wrap"
        >
          <Image
            id="github-stats-card"
            src={`https://github-readme-stats.vercel.app/api?username=Ranjan095&show_icons=true&locale=en&theme=${gitCardTheme}&bg_color=${gitCardBg}&border_radius=10&border_color=${gitCardBorder}&hide_border=true`}
            alt="readme-streak-stats-icons"
            w={{ base: "100%", md: "70%", lg: "45%" }}
            m="auto"
            boxShadow={useColorModeValue(
              "rgba(0, 0, 0, 0.4) 0px 0px 15px",
              "rgba(110, 13, 208, 0.4) 0px 0px 15px"
            )}
            _hover={{
              boxShadow: useColorModeValue(
                "rgba(0, 0, 0, 0.6) 0px 0px 30px",
                "rgba(192, 26, 192, 0.8) 0px 0px 30px"
              ),
            }}
            transition="0.5s"
            borderRadius="10px"
          />

          <Image
            id="github-top-langs"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=Ranjan095&show_icons=true&locale=en&layout=compact&theme=${gitCardTheme}&bg_color=${gitCardBg}&border_radius=10&hide_border=true&border_color=${gitCardBorder}`}
            alt="top-langs"
            w={{ base: "100%", md: "70%", lg: "40%" }}
            m="auto"
            boxShadow={useColorModeValue(
              "rgba(0, 0, 0, 0.4) 0px 0px 15px",
              "rgba(110, 13, 208, 0.4) 0px 0px 15px"
            )}
            _hover={{
              boxShadow: useColorModeValue(
                "rgba(0, 0, 0, 0.6) 0px 0px 30px",
                "rgba(192, 26, 192, 0.8) 0px 0px 30px"
              ),
            }}
            transition="0.5s"
            borderRadius="10px"
          />

          <Image
            id="github-streak-stats"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=Ranjan095&theme=${gitCardTheme}&background=${gitCardBg}&border_radius=10&border=${gitCardBorder}&hide_border=true&stroke=${gitCardBorder}&fire=ed8936&currStreakLabel=${useColorModeValue(
              "886bd3",
              "9745f5"
            )}`}
            alt="readme-streak-stats"
            w={{ base: "100%", md: "70%", lg: "45%" }}
            m="auto"
            boxShadow={useColorModeValue(
              "rgba(0, 0, 0, 0.4) 0px 0px 15px",
              "rgba(110, 13, 208, 0.4) 0px 0px 15px"
            )}
            _hover={{
              boxShadow: useColorModeValue(
                "rgba(0, 0, 0, 0.6) 0px 0px 30px",
                "rgba(192, 26, 192, 0.8) 0px 0px 30px"
              ),
            }}
            transition="0.5s"
            borderRadius="10px"
          />
        </Flex>
      </Box>
    </>
  );
};

export default GithubStats;
