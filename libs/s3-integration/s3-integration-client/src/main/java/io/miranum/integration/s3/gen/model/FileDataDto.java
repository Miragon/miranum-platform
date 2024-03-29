/*
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.miranum.integration.s3.gen.model;

import java.util.Objects;
import java.util.Arrays;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;

/**
 * File data for requesting a presigned url
 */
@JsonPropertyOrder({
  FileDataDto.JSON_PROPERTY_PATH_TO_FILE,
  FileDataDto.JSON_PROPERTY_EXPIRES_IN_MINUTES,
  FileDataDto.JSON_PROPERTY_END_OF_LIFE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class FileDataDto {
  public static final String JSON_PROPERTY_PATH_TO_FILE = "pathToFile";
  private String pathToFile;

  public static final String JSON_PROPERTY_EXPIRES_IN_MINUTES = "expiresInMinutes";
  private Integer expiresInMinutes;

  public static final String JSON_PROPERTY_END_OF_LIFE = "endOfLife";
  private LocalDate endOfLife;

  public FileDataDto() {
  }

  public FileDataDto pathToFile(String pathToFile) {
    
    this.pathToFile = pathToFile;
    return this;
  }

   /**
   * Get pathToFile
   * @return pathToFile
  **/
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_PATH_TO_FILE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getPathToFile() {
    return pathToFile;
  }


  @JsonProperty(JSON_PROPERTY_PATH_TO_FILE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPathToFile(String pathToFile) {
    this.pathToFile = pathToFile;
  }


  public FileDataDto expiresInMinutes(Integer expiresInMinutes) {
    
    this.expiresInMinutes = expiresInMinutes;
    return this;
  }

   /**
   * Get expiresInMinutes
   * minimum: 1
   * @return expiresInMinutes
  **/
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_EXPIRES_IN_MINUTES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getExpiresInMinutes() {
    return expiresInMinutes;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRES_IN_MINUTES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setExpiresInMinutes(Integer expiresInMinutes) {
    this.expiresInMinutes = expiresInMinutes;
  }


  public FileDataDto endOfLife(LocalDate endOfLife) {
    
    this.endOfLife = endOfLife;
    return this;
  }

   /**
   * Get endOfLife
   * @return endOfLife
  **/
  @javax.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_END_OF_LIFE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getEndOfLife() {
    return endOfLife;
  }


  @JsonProperty(JSON_PROPERTY_END_OF_LIFE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndOfLife(LocalDate endOfLife) {
    this.endOfLife = endOfLife;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FileDataDto fileDataDto = (FileDataDto) o;
    return Objects.equals(this.pathToFile, fileDataDto.pathToFile) &&
        Objects.equals(this.expiresInMinutes, fileDataDto.expiresInMinutes) &&
        Objects.equals(this.endOfLife, fileDataDto.endOfLife);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pathToFile, expiresInMinutes, endOfLife);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FileDataDto {\n");
    sb.append("    pathToFile: ").append(toIndentedString(pathToFile)).append("\n");
    sb.append("    expiresInMinutes: ").append(toIndentedString(expiresInMinutes)).append("\n");
    sb.append("    endOfLife: ").append(toIndentedString(endOfLife)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

